import { create } from "zustand";
import { persist } from "zustand/middleware";
import { supabase } from "@/lib/supabase";

type AuthStore = {
  user: any;
  loading: boolean;

  init: () => Promise<void>;
  signIn: (email: string, password: string) => Promise<void>;
  signUp: (email: string, password: string) => Promise<void>;
  signOut: () => Promise<void>;
};

export const useAuthStore = create<AuthStore>()(
  persist(
    (set) => ({
      user: null,
      loading: true,

      init: async () => {
        const { data } = await supabase.auth.getUser();

        set({
          user: data.user,
          loading: false,
        });

        supabase.auth.onAuthStateChange((_event, session) => {
          set({ user: session?.user || null });
        });
      },

      signIn: async (email, password) => {
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password,
        });

        if (error) {
          throw error;
        }

        set({ user: data.user });
      },

      signUp: async (email, password) => {
        const { error } = await supabase.auth.signUp({
          email,
          password,
        });

        if (error) throw error;
      },

      signOut: async () => {
        await supabase.auth.signOut();
        set({ user: null });
      },
    }),
    {
      name: "auth-storage",
      partialize: (state) => ({ user: state.user }),
    },
  ),
);
