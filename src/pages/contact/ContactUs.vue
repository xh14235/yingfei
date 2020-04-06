<template>
  <div class="contact">
    <div class="container">
      <el-row>
        <el-form ref="form" :model="form" label-width="80px">
          <el-form-item label="姓名">
            <el-input
              placeholder="请输入姓名"
              prefix-icon="el-icon-date"
              size="medium"
              v-model="form.name"
              @blur="nameblur"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="公司">
            <el-input
              placeholder="请输入公司"
              prefix-icon="el-icon-date"
              size="medium"
              v-model="form.company"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="电话">
            <el-input
              placeholder="请输入电话"
              prefix-icon="el-icon-date"
              size="medium"
              v-model="form.tel"
              @blur="telblur"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="邮箱">
            <el-input
              placeholder="请输入邮箱"
              prefix-icon="el-icon-date"
              size="medium"
              v-model="form.email"
              @blur="emailblur"
              clearable
            ></el-input>
          </el-form-item>
          <el-form-item label="留言">
            <el-input placeholder="请输入内容" v-model="form.msg" type="textarea" clearable></el-input>
          </el-form-item>
          <el-alert
            style="margin: -11px 0 11px 80px;width: calc( 100% - 80px)"
            :title="errormsg"
            :type="tiptype"
          ></el-alert>
          <el-form-item>
            <el-button type="primary" @click="onSubmit">立即创建</el-button>
            <el-button>取消</el-button>
          </el-form-item>
        </el-form>
      </el-row>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'ContactUs',
  data() {
    return {
      form: {
        name: '',
        company: '',
        tel: '',
        email: '',
        msg: ''
      },
      tiptype: '',
      errormsg: '',
      regtel: /^1(3|4|5|6|7|8|9)\d{9}$/,
      regemail: new RegExp(
        '^[a-z0-9]+([._\\-]*[a-z0-9])*@([a-z0-9]+[-a-z0-9]*[a-z0-9]+.){1,63}[a-z0-9]+$'
      )
    }
  },
  methods: {
    nameblur() {
      if (this.form.name == '') {
        this.tiptype = 'warning'
        this.errormsg = '姓名不能为空！'
      } else {
        this.tiptype = ''
        this.errormsg = ''
      }
    },
    telblur() {
      if (this.form.tel == '') {
        this.tiptype = 'warning'
        this.errormsg = '电话不能为空！'
      } else if (!this.regtel.test(this.form.tel)) {
        this.tiptype = 'warning'
        this.errormsg = '电话格式不正确！'
      } else {
        this.tiptype = ''
        this.errormsg = ''
      }
    },
    emailblur() {
      if (this.form.email == '') {
        this.tiptype = 'warning'
        this.errormsg = '邮箱不能为空！'
      } else if (!this.regemail.test(this.form.email)) {
        this.tiptype = 'warning'
        this.errormsg = '邮箱格式不正确！'
      } else {
        this.tiptype = ''
        this.errormsg = ''
      }
    },
    onSubmit() {
      if (!this.form.name) {
        this.tiptype = 'warning'
        this.errormsg = '姓名不能为空！'
      } else if (!this.form.tel) {
        this.tiptype = 'warning'
        this.errormsg = '手机不能为空！'
      } else if (!this.form.email) {
        this.tiptype = 'warning'
        this.errormsg = '邮箱不能为空！'
      } else if (!this.regtel.test(this.form.tel)) {
        this.tiptype = 'warning'
        this.errormsg = '电话格式不正确！'
      } else if (!this.regemail.test(this.form.email)) {
        this.tiptype = 'warning'
        this.errormsg = '邮箱格式不正确！'
      } else {
        axios.get('/api/msg.json').then(res => {
          const data = res.data.data
          if (data == 'success') {
            this.tiptype = 'success'
            this.errormsg = '留言成功！'
          } else {
            this.tiptype = 'error'
            this.errormsg = '留言失败！'
          }
        })
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.contact
  min-height: 80vh
  .container
    width: 600px
    margin: 30px auto
    .dd
      padding: 0 0 11px 80px
      margin-top: -11px
      &.red
        color: red
      &.green
        color: green
</style>
