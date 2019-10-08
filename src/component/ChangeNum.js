import Taro, { Component } from '@tarojs/taro'
import { View } from '@tarojs/components'

import './ChangeNum.scss'

export default class ChangeNum extends Component{

    constructor(props){
        super(props)
        this.state = {
            cnum:0
        }
    }

    componentWillReceiveProps(props){
        console.log(props)
    }

    componentWillMount(){
        this.setState({
            cnum:this.props.num
        })
    }

    addOrReduce = (type) =>{
        var {cnum} = this.state

        if (type) {
            cnum ++
        } else {
            if (cnum>1) {
                cnum --
            }
        }

        this.setState({
            cnum:cnum
        })
    }


    render(){
        const { cnum } = this.state

        return (
                <View className="changenum">
                    <View className="add" onClick={()=>{this.addOrReduce(true)}}>
                        <Text>+</Text>
                    </View>
                    <View>
                        <Input value={cnum}></Input>
                    </View>
                    <View className="reduce" onClick={()=>{this.addOrReduce(false)}}>
                        <Text>-</Text>
                    </View>
                </View>
        )
    }
}