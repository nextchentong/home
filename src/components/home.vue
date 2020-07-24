<template>
  <div class="hello">
    <div id="code"
         v-highlight>
      <pre><code>{{code}}</code></pre>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      code: `<!DOCTYPE html>
<html lang="zh">

<head>
  <meta charset="utf-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width,initial-scale=1.0">
  <meta name="author" content="陈通">
  <meta name="description" content="陈通的个人网站">
  <meta name="keywords" content="陈通, 我的梦想像梦 陈通的个人网站">
  <link rel="icon" href="<%= BASE_URL %>favicon.ico">
  <title>陈通</title>
</head>

<body>
  <a target="_blank"  href="https://undefined.net.cn/api/project/#/about_me">
    See My Project
  </a>
  <a target="_blank" class="icp"
    href="http://www.beianbeian.com/beianxinxi/94264bdc19314f5ee1c00b58246e322b.html">
    鲁ICP备19040877号
  </a>
</body>

</html>`
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="stylus">
pre
  margin 0
  font-size 25px
</style>
