// import React, { useState, useEffect } from 'react'
// import { get, patch } from 'axios';

function UserEdit (props) {
  // const initialState = { title: '', content: '' }
  // const [user, setUser] = useState(initialState)

  // useEffect(function () {
  //   async function getUser () {
  //     try {
  //       const response = await get(`/api/users/${props.match.params._id}`)
  //       setUser(response.data)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   getUser()
  // }, [props])

  // function handleSubmit (event) {
  //   event.preventDefault()
  //   async function updateUser () {
  //     try {
  //       await patch(`/api/users/${user._id}`, user)
  //       props.history.push(`/users/${user._id}`)
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   }
  //   updateUser()
  // }

  // function handleChange (event) {
  //   setUser({ ...user, [event.target.name]: event.target.value })
  // }

  // function handleCancel () {
  //   props.history.push(`/users/${user._id}`)
  // }

  // return (
  //   <div>
  //     <h1>Edit {user.title}</h1>
  //     <hr/>
  //     <form onSubmit={handleSubmit}>
  //       <div className="form-group">
  //         <label>Title</label>
  //         <input type="text" name="title" value={user.title} onChange={handleChange} className="form-control" />
  //       </div>
  //       <div className="form-group">
  //         <label>Content</label>
  //         <textarea name="content" rows="5" value={user.content} onChange={handleChange} className="form-control" />
  //       </div>
  //       <div className="btn-group">
  //         <button type="submit" className="btn btn-primary">Update</button>
  //         <button type="button" onClick={handleCancel} className="btn btn-secondary">Cancel</button>
  //       </div>
  //     </form>
  //   </div>
  // )
}

export default UserEdit
