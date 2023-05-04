import { component$, $ } from "@builder.io/qwik";
import { HelloMessage } from "~/components/hello-message/hello-message";

export default component$(() => {
  console.log("initializing hello world component");

  const sayHello = $(() => {
    alert("hello world");
  });

  const onShowMessageClicked = $((message: string) => alert(message))

  const messages = [
    "hello world",
    "welcome to this Qwik course",
    "learn Qwik framework"
  ]

  return (
    <>
      { messages.map((message, index) => (
        <HelloMessage key={index} message={message} showButton={true} onShowMessage={onShowMessageClicked} courseVersion={index} />
      )) }

      <button onClick$={sayHello}>say hello</button>
    </>
  );
});
