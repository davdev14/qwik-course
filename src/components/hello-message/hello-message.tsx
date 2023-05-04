import { component$ } from "@builder.io/qwik";

interface HelloMessageProps {
  message: string;
  courseVersion?: number;
}


export const HelloMessage = component$((props: HelloMessageProps) => {

  const {message, courseVersion} = props

  return (
    <div class="container">
      {
        <h1>
          {message} - {courseVersion}
        </h1>
      }
    </div>
  );
});
