import React, { useEffect, useState } from "react";
import {
    ChatEngine, ChatList, ChatCard, NewChatForm,
    ChatFeed, ChatHeader, IceBreaker, MessageBubble, IsTyping, ConnectionBar, NewMessageForm,
    ChatSettings, ChatSettingsTop, PeopleSettings, PhotosSettings, OptionsSettings
} from 'react-chat-engine';

import useAuth from "../../Hooks/useAuth";
import Navigation from "../../Sharesed/Navigation";



const Chats = () => {

    const { user } = useAuth();
    const [loading, setLoading] = useState(true);
    const axios = require('axios');
    const getFile = async (url) => {
        const response = await fetch(url);
        const data = await response.blob();
        return new File([data], "userPhoto.jpg", { type: "image/jpeg" })
    }

    useEffect(() => {

        if (!user.email) return 'Places Login';
        axios.get('https://api.chatengine.io/users/me/', {
            headers: {
                "project-id": "166f699f-eb28-44bf-b12b-1f8c8abbdf3e",
                "user-name": user?.email,
                "user-secret": user?.uid
            }
        })
            .then(() => {
                setLoading(false)
            })
            .catch(() => {
                let formdata = new FormData();
                formdata.append('email', user?.email);
                formdata.append('username', user?.email);
                formdata.append('secret', user?.uid);

                getFile(user?.photoURL)
                    .then((avatar) => {
                        formdata?.append('avatar', avatar, avatar?.name)

                        axios.post('https://api.chatengine.io/users/',
                            formdata,
                            { headers: { "private-key": "fb7b69c3-b460-470a-abb2-729441a3502d" } }
                        ).then(() => setLoading(false))
                            .catch(error => console.log(error))
                    })
            })
    }, [axios, user?.email, user?.photoURL, user?.uid])


    if (!user || loading) return 'Loading ...';


    return (
        <div className="chat-page" >


            <div style={{ marginTop: '100px', paddingBottom: '100px' }}>
                <Navigation />
                <ChatEngine

                    height="calc(100vh-66px)"
                    projectID='166f699f-eb28-44bf-b12b-1f8c8abbdf3e'
                    userName={user?.email}
                    userSecret={user?.uid}
                    renderChatList={(chatAppState) => <ChatList {...chatAppState} />}
                    renderChatCard={(chat, index) => <ChatCard key={`${index}`} chat={chat} />}
                    renderNewChatForm={(creds) => <NewChatForm creds={creds} />}
                    renderChatFeed={(chatAppState) => <ChatFeed {...chatAppState} />}
                    renderChatHeader={(chat) => <ChatHeader chat={chat} />}
                    renderIceBreaker={(chat) => <IceBreaker chat={chat} />}
                    renderMessageBubble={(creds, chat, lastMessage, message, nextMessage) =>
                        <MessageBubble lastcredsMessage={creds} lastMessage={lastMessage} message={message} nextMessage={nextMessage} chat={chat} />}
                    renderIsTyping={(typers) => <IsTyping typers={typers} />}
                    renderConnectionBar={(chat) => <ConnectionBar chat={chat} />}
                    renderNewMessageForm={(creds, chatID) => <NewMessageForm creds={creds} chatID={chatID} />}
                    renderChatSettings={(chatAppState) => <ChatSettings {...chatAppState} />}
                    renderChatSettingsTop={(creds, chat) => <ChatSettingsTop creds={creds} chat={chat} />}
                    renderPeopleSettings={(creds, chat) => <PeopleSettings creds={creds} chat={chat} />}
                    renderPhotosSettings={(chat) => <PhotosSettings chat={chat} />}
                    renderOptionsSettings={(creds, chat) => <OptionsSettings creds={creds} chat={chat} />}
                />
            </div>

        </div>
    );
};



export default Chats;