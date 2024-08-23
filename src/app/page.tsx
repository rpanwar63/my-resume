"use client";
import Resume from "@/features/resume/Resume";
import styles from "./page.module.scss";
import Form from "@/features/form/Form";
import { useAppSelector } from "@/store/hooks";
export default function Home() {
  const viewFlipped = useAppSelector(state => state.styles.viewFlipped);
  return (
    <section
      className={`${styles.page_wrapper} ${
        viewFlipped ? styles.flip_view : ""
      }`}
    >
      <Form />
      <Resume />
    </section>
  );
}
