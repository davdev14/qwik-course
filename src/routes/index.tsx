import { component$, $ } from "@builder.io/qwik"
import { HelloMessage } from "~/components/hello-message/hello-message";

export default component$(() => {

  console.log('initializing hello world component');
  
  const sayHello = $( () => {
    alert("hello world")
  })

  return (
    <>
      <HelloMessage courseVersion={1} message="hello world!" />
      <HelloMessage courseVersion={1} message="hello world!"/>
      <HelloMessage message="hello world!"/>

      <button onClick$={sayHello}>say hello</button>
    </>
  )
})
