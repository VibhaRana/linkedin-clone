import React, { useState, useEffect } from "react";
import "./Feed.css";
import Post from "./Post";
import CreateIcon from "@material-ui/icons/Create";
import ImageIcon from "@material-ui/icons/Image";
import InputOption from "./InputOption";
import SubscriptionsIcon from "@material-ui/icons/Subscriptions";
import EventNoteIcon from "@material-ui/icons/EventNote";
import CalendarViewDayIcon from "@material-ui/icons/CalendarViewDay";
import { db } from "./firebase";
import firebase from "firebase"

function Feed() {
  const [posts, setPosts] = useState([]);
  const[input, setInput] = useState()

  //Connect to firebase. This useEffect means, everytime posts change, it will go into the database
  useEffect(() => {
    //access db and go into collections of posts and snapshot function which gives a snapshot of posts. So everytime when posts are added, deleted, updated, this function gives us the snapshot of it. Its like a listener
    db.collection("posts")
    //Below line of code means, show the message according to the timestamp and in descending order. i.e the newest message should be displayed on top
    .orderBy('timestamp', 'desc')
    .onSnapshot((snapshot) =>
      // Every time posts change, i want to update my posts piece of state. In a collection you have many docs, so map through the docs, so every single doc inside of that collection will basically return an object
      setPosts(
        snapshot.docs.map((doc) => ({
          // It will return thhe below object
          id: doc.id,
          //This allows you to have any sort of data that is stored behind the post itself
          data: doc.data(),
        }))
      )
    );
  }, []);

  const sendPost = (e) => {
      e.preventDefault();
      // Whenever i type a post, i want to send it to db. When i will add, it add data in form of an object in database
      //So add post in a database by below line of code.
      db.collection('posts').add({
          //add data in form of object in db
          name : 'Vibha Rana',
          description: 'This is a test',
          message : input,
          photoUrl : '',
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
          
      })
      // Clear the input after sending data to db and displaying on screen
      setInput('')

  }

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <CreateIcon />
          <form>
            <input type="text" value = {input} onChange = {e => setInput(e.target.value)} placeholder="Start a post"/>
            <button onClick = {sendPost} type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption title="Photo" Icon={ImageIcon} color="#70B5F9" />
          <InputOption title="Video" Icon={SubscriptionsIcon} color="#E7A33E" />
          <InputOption title="Event" Icon={EventNoteIcon} color="#C0CBCD" />
          <InputOption
            title="Write article"
            Icon={CalendarViewDayIcon}
            color="#7FC15E"
          />
        </div>
      </div>
      {/* Posts */}
      {posts.map(({id, data: {name, description,message, photoUrl }}) => (
        <Post 
        key = {id}
        name = {name}
         description = {description}
         message = {message}
         photoUrl = {photoUrl}/>
      ))}
      
    </div>
  );
}

export default Feed;
