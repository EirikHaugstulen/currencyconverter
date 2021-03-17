import React from "react";
import {connect} from "react-redux";

const Splashscreen = () => {

    return (
        <div>
            <h1>Currency converter</h1>

        </div>
    )
}

const mapStateToProps = state => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(Splashscreen);
