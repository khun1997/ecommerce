// import { supabase } from "@/lib/supabase";

// export async function syncUser() {
//   const {
//     data: { user },
//   } = await supabase.auth.getUser();

//   if (!user) return;

//   await supabase.from("profiles").upsert({
//     id: user.id,
//     email: user.email,
//   });
// }
