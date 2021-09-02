<template>
  <div class="flex-column main noisy">
    <router-view class="flex-column">
    </router-view>
  </div>
</template>
<script>
export default {
}
</script>
<style>
@import url(//fonts.googleapis.com/earlyaccess/jejumyeongjo.css);
@import url(https://static-clova.pstatic.net/static/public/font_event/css_210628/30/30.css);
@import url(//fonts.googleapis.com/earlyaccess/jejugothic.css);

@font-face {
  font-family: dimibang;
  src: local('dimibang'),
    url("./assets/dimibang.ttf") format("truetype");
}

#app {
  font-family: 'Jeju Myeongjo', serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #582908;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  align-items: center;
}

a {
  text-decoration: none;
}

.flex-column {
  display: flex;
  flex-direction: column;
}

.flex-row {
  display: flex;
  flex-direction: row;
}

html, body {
  width: 100%;
  height: 100%;
  /*background: pink;*/
  background:#fcfcfc url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUAAAD8+vz8/vz09vSbQWpEAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAhdJREFUKJEFwdHOcnAcAODfTWJqchRTw5FM73AVGKaOfE2ttyP/ViZXIauGo7JqvR2VVau+5wGz1j/LmptuP0EHaNMLmEW/6hosA0SoXYTm/TBfrmeAz6mltV+iW/jMwVI9rqB5nGAdAWby8dYfZjtqQ7RAqu7U15ZFXDxY0MZj/5F0Tlu+EcBQ8c9C+iIbEZkDdd2Y2eu3HERSAAbvGnrvMN7EAg+7R4LhjBba69qH3ywb8zWv86XhQYJxvH35y4ZjEwGax/e9OW1TOoNDUxb1gz3IGFHUoJJ2fVSlettAObDMrzshT62MyxNAFRPWGL6gUIAByrhBsLwFZ0L1gC8KieDJx8JVW+BE6MhdBxJzPhtA7fZVOvnKLe5igN9EUaflDBK1uwHy65GLABdoHW2hUWCFXpraNJVyINbtyIr5SVNTOHBmzYps44kh3D8Qt15MGRPCwHFlsFGvsS7C80QxcLD9o1kyxOmHSLfwCt/v963WyfSvBytB3cuNKSWr2xwOcf86X0smPTN1EGg+LmvsnrkcA0oDR4SRTZ4umYLt+IMTar2xAqOAf/aW9IY+jbvmD1jlSrsVKe0P9RFo94cYWWwv8igB+LOqLgJH80exCcehkh8Iq7MZ3VMQE79oK8VIN5opuP+wylRsFvMYDlhyP2VvXm6lGAkefqlWIbf6WEQIc8qjrs337EspbVBCqZt73Exa5J//m7ho8mljfwEAAAAASUVORK5CYII=);
  margin: 0px;
}

</style>
<style scoped>
.main {
  width: 100%;
  max-width: 375px;
  height: 100%;
  align-items: center;
  background:#fcfcfc url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwAgMAAAAqbBEUAAAADFBMVEUAAAD8+vz8/vz09vSbQWpEAAAAAXRSTlMAQObYZgAAAAlwSFlzAAAOxAAADsQBlSsOGwAAAhdJREFUKJEFwdHOcnAcAODfTWJqchRTw5FM73AVGKaOfE2ttyP/ViZXIauGo7JqvR2VVau+5wGz1j/LmptuP0EHaNMLmEW/6hosA0SoXYTm/TBfrmeAz6mltV+iW/jMwVI9rqB5nGAdAWby8dYfZjtqQ7RAqu7U15ZFXDxY0MZj/5F0Tlu+EcBQ8c9C+iIbEZkDdd2Y2eu3HERSAAbvGnrvMN7EAg+7R4LhjBba69qH3ywb8zWv86XhQYJxvH35y4ZjEwGax/e9OW1TOoNDUxb1gz3IGFHUoJJ2fVSlettAObDMrzshT62MyxNAFRPWGL6gUIAByrhBsLwFZ0L1gC8KieDJx8JVW+BE6MhdBxJzPhtA7fZVOvnKLe5igN9EUaflDBK1uwHy65GLABdoHW2hUWCFXpraNJVyINbtyIr5SVNTOHBmzYps44kh3D8Qt15MGRPCwHFlsFGvsS7C80QxcLD9o1kyxOmHSLfwCt/v963WyfSvBytB3cuNKSWr2xwOcf86X0smPTN1EGg+LmvsnrkcA0oDR4SRTZ4umYLt+IMTar2xAqOAf/aW9IY+jbvmD1jlSrsVKe0P9RFo94cYWWwv8igB+LOqLgJH80exCcehkh8Iq7MZ3VMQE79oK8VIN5opuP+wylRsFvMYDlhyP2VvXm6lGAkefqlWIbf6WEQIc8qjrs337EspbVBCqZt73Exa5J//m7ho8mljfwEAAAAASUVORK5CYII=);
}

.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}

.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */
{
  opacity: 0;
}
</style>
