<script>
const err = {
    commonErr(res) {
        //console.log("글로벌와ㄸ", res.response.status);
        var statusCode = res.response.status;
        if (statusCode == 404) {
            this.$router.push("/error");
        } else {
            //this.$swal.fire("오류", "관리자에게 문의하세요.", "error");
            alert(" Error :: " + statusCode);
        }
    },

}
const expression = {
    commonAmount(amount) {
        if (amount == null || amount == "" || amount === undefined) {
            return 0;
        } else {
            let result = amount.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
            return result;
        }
    }
}
export default
    {
        err,
        expression
    }
</script>