import React from "react";

const Loading = ({cancel}) => (
    <h1>
        <div styleName='loading'>
            Loading
        </div>
        <button styleName='cancel' onClick={cancel}>
            cancel
        </button>
    </h1>
    )

export default Loading