import { Header } from "components/Header";
import { TaskInput } from "components/TaskInput";
import { Task } from "components/Task";
import { Footer } from "components/Footer";
export default function Home() {
  return (
    // Main container
    <div className="container mx-auto">
      {/* header section */}
      <Header />

      {/* tasks container */}
      <div style={{ maxWidth: "400px" }} className="mx-auto">
        {/* task input */}
        <TaskInput />
        {/* task */}
        <Task title="Read a book" />
        {/* task */}
        <Task title="Take a shower" />
        {/* task */}
        <Task title="Sleep" />
      </div>
      <Footer
        year="2023"
        fullName="Sippakon Khammisawang"
        studentId="650610813"
      />
      {/* //footer section */}
    </div>
  );
}