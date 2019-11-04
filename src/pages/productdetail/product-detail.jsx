import Taro, { Component } from '@tarojs/taro'
import { View, Button, Text,Swiper, SwiperItem } from '@tarojs/components'
import { api } from '../../api/api'
import './../../app.scss'

export default class ProductDetail extends Component{
    config = {
        navigationBarTitleText: '商品详情'
    }

    constructor(){
        super()
        this.state = {
            product:{
                id:'',
                name: '',
                image:'',
                detailimgs:[],
                price:0,
                type:'',
                typename:'',
                retainnum:0,
                sale:0,
                saleprice:0,
            }
        }
    }

    componentWillMount(){
        this.loadData()
    }

    loadData = ()=>{
        const { id } = this.$router.params

        api.getOneProduct({id:id}).then(res=>{
            this.setState({
                product:res.data.data
            })
        })
    }

    renderSwiper(){
        const {product} = this.state

        if (product.detailimgs.length>0) {
            return (
                <View>
                    <Swiper
                        className='pd-swiper'
                        autoplay>
                            {
                                product.detailimgs.map(item=>{
                                    return (
                                        <SwiperItem>
                                            <Image src={item} />
                                        </SwiperItem>
                                    )
                                })
                            }
                    </Swiper>
                </View>
            )   
        }
        return (
            <View></View>
        )
    }

    render(){
        const {product} = this.state

        return (
            <View className="pd-page">
                {this.renderSwiper()}
                <View className="pd-info">
                    <Text>{product.name}</Text>
                    <View>
                        <Text className="gray-c fs14">价格：{product.price}</Text>
                        <Text className="gray-c fs14 fl-r">购买数：{product.price}</Text>
                    </View>
                </View>
                <View className="pd-footer">
                    <Button className="pd-f-btn fs14 br-0">立即购买</Button>
                    <Button className="pd-f-btn br-0 fs14 gary">加入购物车</Button>
                </View>
            </View>
        )
    }
} 