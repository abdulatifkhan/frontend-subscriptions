function Error ({ error }) {

  return (
    <>
      <mark>{ error.message }</mark>
    </>
  )
}

export default Error