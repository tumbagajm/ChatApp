import {PrettyChatWindow} from 'react-chat-engine-pretty';

const ChatsPage = (props) =>{
    return (
        <div style = {{height: '100vh'}}>
            <PrettyChatWindow 
                projectId= '5b04a720-9a4a-46cc-8233-b767e7c4a737' 
                username = {props.user.username} 
                secret = {props.user.secret}
                style = {{height: '100%'}}
            />
        </div>
    )
}

export default ChatsPage;