import { component$, useStore, createContext, useContextProvider, useContext } from '@builder.io/qwik'


interface MessagesStore {
  messages: string[],
  index: number
}

export const MessagesContext = createContext<MessagesStore>('MESSAGES')

export default component$(() => {

  const messages = [
    "hello world",
    "welcome to this Qwik course",
    "learn Qwik framework"
  ]

  const store = useStore({
    messages,
    index: 0
  })

  useContextProvider(MessagesContext, store)

  return (
    <>
      <h1>Qwik Store</h1>
      <h3> {messages[store.index]} </h3>

      <button onClick$={() => store.index++}>Next Message</button>
    </>
  )
})


export const message = component$(() => {

  const store = useContext(MessagesContext)

  const {messages, index} = store
  return (
    <h3>{messages[index]}</h3>
  )
})