import { COURSE_CREDITS } from "@/lib/config";
import { AuthAction } from "./AuthAction";

export default function Footer() {
  return (
    <footer>
      <p>A website by Itamar Yekutiel</p>
      <p>
        <AuthAction /> {COURSE_CREDITS}
      </p>
    </footer>
  );
}
