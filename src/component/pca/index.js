import Taro from '@tarojs/taro'
import { Picker,View } from '@tarojs/components'
import area from './area'
import './pca.scss'

export class PCA extends Taro.Component{
    constructor(props){
        super(props)

        this.state = {
            provinces:[],
            provinceValue:0,
            citys:[],
            cityValue:0,
            areas:[],
            areaValue:0,
            data:[],
            dataValue:[0,0,0],
            selectValue:null
        }
    }

    componentWillMount = (props) =>{
        const {provinceValue,cityValue,areaValue} = this.state
        var provinces = Object.keys(area)
        var citys = Object.keys(area[provinces[provinceValue]])
        var areas = area[provinces[provinceValue]][citys[cityValue]]
        this.setState({
            provinces:provinces,
            citys:citys,
            areas:areas,
            data:[provinces,citys,areas]
        })
        // this.loadData()
    }

    loadData = () =>{

    }
    // 改变数据源
    changeData = (col,val) =>{
        // 省改变
        const { provinces,provinceValue,cityValue,areaValue } = this.state 

        if (col == 0) {
            var citys = Object.keys(area[provinces[val]])
            var areas = area[provinces[val]][citys[0]]
            this.setState({
                provinceValue:val,
                citys:citys,
                areas:areas,
                data:[provinces,citys,areas]
            })
        } 
        // 市改变
        else if(col == 1){
            const { citys,provinceValue } = this.state 
            var areas = area[provinces[provinceValue]][citys[val]]
            this.setState({
                cityValue:val,
                areas:areas,
                data:[provinces,citys,areas]
            })
        }
        // 区改变
        else {
            
        }
    }

    onChange = (e) =>{
        const { provinces,citys,areas } = this.state
        var value = provinces[e.detail.value[0]]+citys[e.detail.value[1]]+areas[e.detail.value[2]]
        this.setState({
            dataValue:e.detail.value,
            selectValue:value
        },()=>{
            this.props.callback(value)
        })
    }   

    onColumnChange = (e) =>{
        var column = e.detail.column
        var value = e.detail.value
        this.changeData(column,value)
    }

    render() {
        return (
            <View>
                <View>
                    <Picker mode='multiSelector' range={this.state.data} onColumnChange = {this.onColumnChange} value={this.state.dataValue} onChange={this.onChange} onColumnChange={this.onColumnChange}>
                        <View className={this.state.selectValue==null?'gary picker':'select picker'}>
                            {
                                this.state.selectValue==null?'请选择':this.state.selectValue
                            }
                        </View>
                    </Picker>
                </View>
            </View>
        )
    }
}
