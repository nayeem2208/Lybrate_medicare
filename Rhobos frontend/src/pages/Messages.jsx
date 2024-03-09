import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";

const Messages = () => {
  const [rooms, setRooms] = useState([]);
  const [chatId, setChatId] = useState("");
  const [chats, setChats] = useState([]);
  const [doctor, setDoctor] = useState("");
  const [content, setContent] = useState("");
  const [messageSent, setMessageSent] = useState(false);
  const [socketConnected, setSocketConnected] = useState(false);

  // const { chatid } = useParams();

  // useEffect(()=>{
  //     socket = io(ENDPOINT);
  //     socket.emit("setup",userInfo)
  //     socket.on('connection',()=>setSocketConnected(true))
  // },[])

  const sendHandler = async () => {
    // if(content===''){
    //     toast.error("Message cannot be empty")
    //     return
    // }
    // try {
    //     let res = await usersApi.post(`/sendchat/${chatId}/${userInfo._id}/User`,{content})
    //     if(res){
    //         console.log(res.data)
    //         setContent('')
    //         setMessageSent(true)
    //         socket.emit('new message',res.data)
    //     }
    // } catch (error) {
    //     console.log(error.message)
    // }
  };

  // useEffect(() => {
  //     if (chatid !== 'allchats') {
  //         setChatId(chatid);
  //     }
  // }, [chatid]);

  // useEffect(() => {
  //     let fetchMessages = async () => {
  //         let res = await usersApi.get(`/get-room-messages/${chatId}`);
  //         if (res) {
  //             setChats(res.data)
  //             setMessageSent(false)
  //             socket.emit("join chat",chatId)
  //         }
  //     };
  //     if(chatId){
  //         fetchMessages();
  //     }
  //     selectedChatCompare = chats;
  // }, [chatId,messageSent]);

  // useEffect(() => {
  //     socket.on('message received',(newMessageReceived)=>{
  //         if(!selectedChatCompare || chatId!==newMessageReceived.room._id){

  //         }else{
  //             setChats([...chats,newMessageReceived])
  //         }
  //     })
  // })

  // useEffect(() => {
  //     if (userInfo._id) {
  //         let fetchRooms = async () => {
  //             let res = await usersApi.get(`/getrooms/${userInfo._id}`);
  //             setRooms(res.data);
  //         };
  //         fetchRooms();
  //     }
  // }, [userInfo]);

  return (
    <section className=" h-screen flex-col  bg-slate-300 py-12">
      <div className="flex h-full justify-center   full bg-white  border-r-2 rounded-lg mx-12">
        <div className="w-1/3 p-4 ">
          <h1 className="font-semibold text-2xl text-center mb-6">Chats</h1>
          <div className="h-5/6 overflow-y-auto ">
            <div className="mx-2 rounded-lg  border  flex items-center my-2 py-2">
              <div className="w-14 h-14 rounded-full bg-black py-2 mx-2">
                <img src="" alt="" />
              </div>
              <h1 className="font-bold text-lg">Nayeem CE</h1>
            </div>
          </div>
          {/* {
                    rooms.length > 0 ?(
                        rooms.map((chat,index)=>(
                            <div key={index} onClick={()=>{setChatId(chat._id);setDoctor(chat.doctor.name)}} className='flex justify-between my-2 mx-5 items-center bg-blue-600 p-3 rounded-lg'>
                                <h3 className='font-bold text-white'>{chat.doctor.name}</h3>
                                <span className="h-fit inline-flex items-center rounded-md bg-blue-50 px-2 py-2 text-xs font-bold text-blue-600 ring-1 ring-inset ring-blue-600/10">
                                    {chat.doctor.specialization}
                                </span>
                            </div>
                        ))
                    ):( */}
          {/* <div className="flex h-full justify-center items-center">
            <p className="text-blue-600 font-bold">No Chats</p>
          </div> */}
          {/* ) */}
          {/* } */}
        </div>
        <div className="w-2/3 h-full border-l-2 ">
          {/* {
                    chatId ? (  
                        <div className='h-full w-full'>
                            <div className='bg-blue-600 w-full p-4 my-3 rounded-lg'><h3 className='font-medium text-white'>{doctor}</h3></div>
                            <div className='bg-white h-4/6 w-full overflow-y-auto p-5'>
                                {chats && chats.length > 0 ? (
                                    chats.map((chat, index) => (
                                        chat.senderType === 'User' ? (
                                            <div key={index} className='w-full flex my-2 justify-end'>
                                                <div className='bg-blue-600 max-w-1/2 w-fit text-white p-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg'>
                                                    {chat.content}
                                                </div>
                                            </div>
                                        ) : (
                                            <div key={index} className='w-full my-2'>
                                                <div className='bg-blue-200 max-w-1/2 w-fit p-2 rounded-tl-lg rounded-tr-lg rounded-br-lg'>
                                                    {chat.content}
                                                </div>
                                            </div>
                                        )
                                    ))
                                ) : (
                                    <div className='w-full h-full flex items-center justify-center'>
                                        No Chats
                                    </div>
                                )}
                            </div>
                            <div className='flex my-4'>
                                <div className='w-11/12'>
                                    <input value={content} onChange={(e)=>setContent(e.target.value)} className='h-full w-full p-3' type="text" />
                                </div>
                                <div className='w-1/12'>
                                    <button type="button" onClick={sendHandler} className="h-full w-full text-white bg-blue-900 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm py-2.5 mb-2 dark:bg-blue-600 dark:hover:bg-blue-600 focus:outline-none dark:focus:ring-blue-800">Send</button>
                                </div>
                            </div>
                        </div>                      
                    ):null
                } */}
          <div className="h-14 bg-red-500 rounded-tr-lg flex items-center px-6">
            <div className="w-9 h-9 rounded-full bg-white mx-4">
              <img src="" alt="" />
            </div>
            <h1 className="font-bold text-white">DR John Doe</h1>
          </div>
          <div className="bg-slate-200 h-96">
            {chats && chats.length > 0 ? (
              chats.map((chat, index) =>
                chat.senderType === "User" ? (
                  <div key={index} className="w-full flex my-2 justify-end">
                    <div className="bg-blue-600 max-w-1/2 w-fit text-white p-2 rounded-tl-lg rounded-tr-lg rounded-bl-lg">
                      {chat.content}
                    </div>
                  </div>
                ) : (
                  <div key={index} className="w-full my-2">
                    <div className="bg-blue-200 max-w-1/2 w-fit p-2 rounded-tl-lg rounded-tr-lg rounded-br-lg">
                      {chat.content}
                    </div>
                  </div>
                )
              )
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                No Chats
              </div>
            )}
          </div>
          <div className="w-full flex justify-center items-center p-2 ">
            <form action="" className="w-4/5 flex">
              <div className="flex items-center border w-4/5 border-gray-300 rounded-lg">
                <input
                  type="text"
                  className="w-4/5 px-2 focus:outline-none"
                  placeholder="Type your message..."
                />
              </div>
              <button
                type="submit"
                className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Messages;
