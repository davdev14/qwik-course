import { component$, useResource$, Resource, useStore } from '@builder.io/qwik'
import courses from '../../models/course'


interface coursesStore {
  courses: courses[]
}

export default component$(() => {

  const store = useStore({
    reloadCounter: 0
  })

  const resource = useResource$<coursesStore>((ctx) => {
    ctx.track(() => store.reloadCounter)
    return getCourses()
  })


  return (
    <>
    {/* <p>Loading: {resource.loading} </p> */}

    {/* {resource.value.then(courses => (
      courses.map(course => (
        <h3>{course.description} </h3>
      ))
    ))} */}

    <button onClick$={() => store.reloadCounter++}>Reload courses</button>

    <Resource 
      value={resource}
      onPending={() => (
        <h1>Loading...</h1>
      )}
      onRejected={() => (
        <h1>Request failed.</h1>
      )}
      onResolved={courses => (
        <>
          {courses.map(course => (
            <h3>{course.description} </h3>
          ))}
        </>
      )}
    />

    </>
  )
})

export async function getCourses() {
  const response = await fetch('http://localhost:9000/api/courses')
  return response.json()
}


// export default component$(() => {

//   const store = useStore<coursesStore>({
//     courses: []
//   })

//   const onLoadCourses = $(async() => {
//     const courses = await getCourses()
//     store.courses = courses
//   })

//   return (
//     <>
    
//     <button onClick$={onLoadCourses}>Load Courses</button>

//     {store.courses.map(course => (
//       <h3> {course.description} </h3>
//     ))}
    
//     </>
//   )
// })