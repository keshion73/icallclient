<template>
    <div class="user-wrap">
        <LoadingComponents :loading="loading" :msg="msg">
        </LoadingComponents>
        <ModalComponents :icon="iconName" :title="modalTitle" v-if="upModal" @close="upModal = false">
            <p slot="mes" v-html="msgHtml"></p>
            <div slot="btn">
                <v-btn color="btnbg" x-large @click.prevent="modalConfirm">확인</v-btn>
            </div>
        </ModalComponents>
        <div class="user-cont">
            <p class="tit">제휴 신청하기</p>
            <v-form ref="addForm" action="">
                <h4>대표자명</h4>
                <v-text-field ref="refRepresentativeName" v-model="addItem.representative_name" outlined hide-details="auto"
                    :rules="[rules.addRepresentativeName.required, rules.addRepresentativeName.length, rules.addRepresentativeName.charValid]"></v-text-field>
                <h4>대리점명</h4>
                <v-text-field ref="refAgencyName" v-model="addItem.agency_name" outlined hide-details="auto"
                    :rules="[rules.addAgencyName.required, rules.addAgencyName.length, rules.addAgencyName.charValid]"></v-text-field>
                <h4>전화번호(숫자만 입력해주세요.)</h4>
                <v-text-field ref="refPhoneNumber" v-model="addItem.phone_number" outlined hide-details="auto"
                    :rules="[rules.addPhoneNumber.required, rules.addPhoneNumber.length, rules.addPhoneNumber.charValid]"></v-text-field>
                <h4>이메일</h4>
                <v-text-field ref="refEmail" v-model="addItem.email" outlined hide-details="auto"
                    :rules="this.addItem.email.length > 0 ? [rules.addEmail.length, rules.addEmail.charValid] : []"></v-text-field>
                <h4>문의사항</h4>
                <v-textarea ref="refReason" v-model="addItem.reason" placeholder="문의사항 입력해 주세요." outlined no-resize
                    rows="10" hide-details="auto" auto-grow clearable counter
                    :rules="[rules.addReason.required, rules.addReason.length, rules.addReason.charValid]"></v-textarea>
                <div class="d-flex">
                    <v-btn class="btntxt" x-large @click="reset()">초기화</v-btn>
                    <v-btn class="btnbg" x-large @click="confirm()" :disabled="regDisable">신청하기</v-btn>
                </div>
            </v-form>
        </div>
    </div>
</template>
<script>
import Footer from '../../views/layout/Footer'
import LoadingComponents from '@/components/LoadingComponents.vue'
import ModalComponents from '@/components/ModalComponents.vue'

export default {
    components: {
        Footer,
        LoadingComponents,
        ModalComponents
    },
    computed: {
        regDisable() {
            if (((this.addItem.agency_name == "" || this.addItem.agency_name == null)
                || (this.addItem.representative_name == "" || this.addItem.representative_name == null)
                || (this.addItem.phone_number == "" || this.addItem.phone_number == null)
                || (this.addItem.email == "" || this.addItem.email == null)
                || (this.addItem.reason == "" || this.addItem.reason == null))) {
                if (this.$refs.refAgencyName == undefined
                    || this.$refs.refRepresentativeName == undefined
                    || this.$refs.refPhoneNumber == undefined
                    || this.$refs.refEmail == undefined
                    || this.$refs.refReason == undefined) {
                    return true;
                } else {
                    return true;
                }
            } else {
                if (this.$refs.refAgencyName.valid == false
                    || this.$refs.refRepresentativeName.valid == false
                    || this.$refs.refPhoneNumber.valid == false
                    || this.$refs.refEmail.valid == false
                    || this.$refs.refReason.valid == false) {
                    return true;
                } else {
                    return false;
                }
            }
        }
    },
    data() {
        return {
            loading: false,
            msg: "조회중 입니다.",
            upModal: false,
            iconName: "",
            modalTitle: "",
            msgHtml: "",
            modalType: "",
            addItem: {
                representative_name: "",
                agency_name: "",
                phone_number: "",
                email: "",
                reason: "",
            },
            defaultItem: {
                representative_name: "",
                agency_name: "",
                phone_number: "",
                email: "",
                reason: "",
            },
            rules: {
                addRepresentativeName: {
                    required: value => !!value || '대표자명은 필수입니다.',
                    length: value => !(value && value.length > 50) || '대표자명은 50자 이상 입력할 수 없습니다.',
                    charValid: value => !(/[\{\}\[\]\/?.,;:|\*~`!^\-_+<>@\#$%&\\\=\'\"]/g.test(value)) || '특수문자는 입력할 수 없습니다.'
                },
                addAgencyName: {
                    required: value => !!value || '대리점명은 필수입니다.',
                    length: value => !(value && value.length > 30) || '대리점명은 30자 이상 입력할 수 없습니다.',
                    charValid: value => !(/[\{\}\[\]\/?.,;:|\*~`!^\-_+<>@\#$%&\\\=\'\"]/g.test(value)) || '특수문자는 입력할 수 없습니다.'
                },
                addEmail: {
                    length: value => !(value && value.length >= 31) || '30자 이상 입력할 수 없습니다.',
                    charValid: value => /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(value) || '예 ) icallmobile@icall.com'
                },
                addPhoneNumber: {
                    required: value => !!value || '전화번호를 입력해주세요.',
                    length: value => value && value.length < 12 || '12자리를 이상 입력할 수 없습니다.',
                    charValid: value => /^[0-9]*$/.test(value) || '숫자만 입력하세요.'
                },
                addReason: {
                    required: value => !!value || '문의사항은 필수입니다.',
                    length: value => !(value && value.length > 100) || '문의사항은 100자 이상 입력할 수 없습니다.',
                    charValid: value => !(/[\{\}\[\]\/?;:|\*~`!^\_+<>@\#$%&\\\=\'\"]/g.test(value)) || '특수문자는 입력할 수 없습니다.'
                },
            },
            inserAffiliate: {
                req: {
                    representative_name: "",
                    agency_name: "",
                    phone_number: "",
                    email: "",
                    reason: "",
                },
                res: {}
            }
        };
    },
    methods: {
        confirm() {
            this.modalType = "insert";
            this.iconName = "icon02";
            this.modalTitle = "제휴 등록";
            this.msgHtml = "등록하시겠습니까?";
            this.upModal = true;
        },
        inserAffiliateAPI() {
            this.loading = true;
            this.modalType = "succ";
            this.inserAffiliate.req = _.clone(this.addItem);
            console.log("REQ :: ", this.inserAffiliate.req);
            this.$axios.post(this.$BASE_URL + "/alliance/inseraffiliate", this.inserAffiliate.req).then((res) => {
                console.log("Response :: ", res.data)
                this.loading = false;
                this.modalType = "succ";
                this.iconName = "icon01";
                this.modalTitle = "성공";
                this.msgHtml = "등록되었습니다.";
                this.upModal = true;
                // if (res.data.result_code == "0000") {
                //     this.totalCnt = res.data.result_count
                //     this.getOpeningList.res = res.data;
                //     this.page = 1;
                // } else {
                //     console.log("ERROR");
                // }
            }).catch((err) => {
                this.modalType = "succ";
                this.loading = false;
                this.GLOBALFNC.err.commonErr(err);
            });
        },
        reset() {
            this.$refs.addForm.reset();
        },
        modalConfirm() {
            if (this.modalType == "insert") {
                this.upModal = false;
                this.inserAffiliateAPI();
            } else {
                this.upModal = false;
            }
        }
    }
};
</script>
<style lang="scss" scoped></style>