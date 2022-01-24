<template>
    <div class="content list">
        <div class="tab_wrap">
            <ul class="tab_nav">
              <li v-for="(val, idx) in tabs" v-bind:key="'tab' + idx" :class="{on:currentTab===idx}">
                  <a href="#" @click="currentTab = idx">{{val}}</a>
              </li>
            </ul>
            <div class="tab_con">
                <div v-show="currentTab == 0">
                    <ul class="list_wrap">
                        <li v-for="item in items" v-bind:key="item.id">
                            <input type="checkbox" v-model="itemChk" :id="item.id" :value="item">
                            <label :for="item.id" class="flex_wrap">
                                <div class="img_wrap">
                                    <img :src="item.images" alt="베스트 아이템">
                                </div>
                                <div class="txt_wrap">
                                    <p class="txt1">{{item.name}}</p>
                                    <p class="txt2"><span><strong class="t_b">단위</strong> : 1{{item.unit}}</span><span><strong class="t_b">가격</strong> : {{item.price}}원</span></p>
                                </div>
                            </label>
                        </li>
                    </ul>
                </div>
                <div v-show="currentTab == 1">
                    tab02
                    <!-- <ul class="list_wrap">
                        <li>
                            <div class="flex_wrap">
                                <input type="checkbox" name="item">
                                <div class="img_wrap">
                                    <img src="../assets/images/img_1.jpg" alt="아이템">
                                </div>
                                <div class="txt_wrap">
                                    <p class="txt1">토마토는 야채라구요!</p>
                                    <p class="txt2"><span><strong class="t_b">단위</strong> : 1박스</span><span><strong class="t_b">가격</strong> : 20,000원</span></p>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div class="flex_wrap">
                                <input type="checkbox" name="item">
                                <div class="img_wrap">
                                    <img src="../assets/images/img_4.jpg" alt="아이템">
                                </div>
                                <div class="txt_wrap">
                                    <p class="txt1">아쓱파라거쓱,,,,;</p>
                                    <p class="txt2"><span><strong class="t_b">단위</strong> : 1개</span><span><strong class="t_b">가격</strong> : 5,000원</span></p>
                                </div>
                            </div>
                        </li>
                    </ul> -->
                </div>
                <div v-show="currentTab == 2">
                    tab03
                    <!-- <ul class="list_wrap">
                        <li>
                            <div class="flex_wrap">
                                <input type="checkbox" name="item">
                                <div class="img_wrap">
                                    <img src="../assets/images/img_2.jpg" alt="아이템">
                                </div>
                                <div class="txt_wrap">
                                    <p class="txt1">니모는 안팔아요. 이쁜이....</p>
                                    <p class="txt2"><span><strong class="t_b">단위</strong> : 1마리</span><span><strong class="t_b">가격</strong> : 1억</span></p>
                                </div>
                            </div>
                        </li>
                    </ul> -->
                </div>
                <div v-show="currentTab == 3">
                    tab04
                    <!-- <ul class="list_wrap">
                        <li>
                            <div class="flex_wrap">
                                <input type="checkbox" name="item">
                                <div class="img_wrap">
                                    <img src="../assets/images/img_3.jpg" alt="아이템">
                                </div>
                                <div class="txt_wrap">
                                    <p class="txt1">준호오빠 너무 잘생겼어요</p>
                                    <p class="txt2"><span><strong class="t_b">단위</strong> : 1명</span><span><strong class="t_b">가격</strong> : 0원</span></p>
                                </div>
                            </div>
                        </li>
                    </ul> -->
                </div>
            </div>
        </div>
        <div class="pay_wrap" v-if="itemChk.length">
            <ul>
                <li v-for="(item, idx) in itemChk" v-bind:key="item.id">
                    <div class="img_wrap">
                        <img :src="item.images" :alt="item.name">
                    </div>
                    <div class="txt_wrap">
                        <p class="t_b">{{item.name}}</p>
                        <div class="select_box">
                            <div class="num">
                                <span>수량 :</span>
                                <select v-model="item.amount">
                                    <option v-for="n in 10" :key="n" :value="n" >{{n}}</option>
                                </select>
                            </div>
                            <div class="price">가격 : <strong class="t_b">{{item.amount * item.price}}</strong>원</div>
                        </div>
                    </div>
                    <button @click="itemChkDelete(idx)">✖️</button>
                </li>
            </ul>
            <p class="total_wrap t_ar">총 <strong class="t_b">{{ totalPrice }}</strong>원</p>
            <button class="pay_btn">결제하기</button>
        </div>
    </div>
</template>
<script>
export default {
    name : 'list',
    data() {
        return {
            currentTab : 0,
            tabs: ['과일','야채','생선','기타'],
            items: null,
            itemChk : [],
        }
    },
    mounted() {
        this.$http.get('https://github.com/tn0319/dddJs/tree/main/dingdongdang/src/assets/json/fruit.json')
            .then(function(res) {
                console.log(res);
            })
            .catch(function(err) {
                console.log(err.response.status, err.response.headers);
            })

    },
    computed: {
        totalPrice: function() {
            return this.itemChk.map((val) => val.amount * val.price).reduce((prev, corrent) => prev + corrent);
        },
    },
    methods: {
        itemChkDelete: function(idx) {
            this.itemChk.splice(idx, 1);
        },
    }
}
</script>
