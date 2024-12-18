import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ url, locals }) => {
  if (!locals.pb.authStore.isValid) {
    throw redirect(302, "/login");
  }

  const session_id = url.searchParams.get("session_id");

  if (!session_id) {
    throw redirect(303, "/pricing");
  }

  if (!locals.pb.authStore.isValid) {
    throw redirect(303, "/login");
  }

  return {
    session_id,
  };
};
