import React, {useState, useEffect} from 'react'

function EffectCleanupFunc({props}) {
    const [isOnline, setIsOnline]  = useState(null)

    useEffect(() => {
        function handleStatusChange(status){
            setIsOnline(status.isOnline)
        }
        ChatAPI.subscribeToFriendStatus(props.friend.is, handleStatusChange)
        {/*chỉ định cleanup sau khi gọi effect */}
        return function cleanup(){
            ChatAPI.unsubscribeForFriendStatus(props.friend.id, handleStatusChange)
        }
    })
    if(isOnline === null){
        return 'Loading'
    }
    return isOnline?'Online':'Offline'
}

export default EffectCleanupFunc
