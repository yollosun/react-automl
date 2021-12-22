import React, { Component } from 'react'

export class ScrGraph extends Component {
    constructor(props) {
        super(props);
        this.state = { 'html': this.props.data.split('<script>')[0] + this.props.data.split('</script>')[1] };
    }

    componentDidUpdate() {
        const jsCode = this.props.data.split('<script>')[1].split('</script>')[0]

        new Function(jsCode)();
    }
    render() {
        return (
            <div dangerouslySetInnerHTML={{ __html: this.state.html }}>

            </div>
        )
    }
}

export default ScrGraph
