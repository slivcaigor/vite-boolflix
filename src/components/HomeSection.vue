<script>

</script>

<template>
  <div class="section-wrapper">
    <div class="first-section">
      <div class="section-text">
        <h1>Goditi Netflix sulla tua TV.</h1>
        <h2>
          Guarda Netflix su smart TV, Playstation, Xbox, Chromecast, Apple TV, lettori Blu-ray e molti altri
          dispositivi.
        </h2>
      </div>
      <div class="section-image-container">
        <div class="section-image">
          <img src="../assets/img/SectionTV.png" alt="">
          <div class="section-video">
            <div class="video">
              <video autoplay>
                <source src="../assets/img/SectionVideo.mp4" type="video/mp4">
              </video>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

.section-wrapper {
  margin-top: 363px;
  padding: 350px 0 200px 0;
  background-color: black;
  border-bottom: 8px solid #222;
  color: #fff;
  margin-bottom: 0;
  position: relative;

  .first-section {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1100px;

    .section-text {
      padding: 0 3rem 0 0;
      width: 52%;

      h1 {
        font-size: 2.8rem;
        font-weight: 700;
      }

      h2 {
        padding-top: 20px;
        font-size: 1.6rem;
        font-weight: 500;
      }
    }

    .section-image-container {
      box-sizing: border-box;
      display: flex;
      flex: 0 1 auto;
      height: 100%;
      width: 48%;
    }

    .section-image-container {
      margin: -10% -5% -5% 0;
      overflow: hidden;
      position: relative;

      .section-image {

        img {
          border: 0;
          height: auto;
          max-width: 100%;
          z-index: 888;
          position: relative;
        }

        .section-video {
          height: 100%;
          left: 50%;
          max-height: 54%;
          max-width: 73%;
          position: absolute;
          top: 48%;
          transform: translate(-50%, -50%);
          width: 100%;

          .video video {
            height: 100%;
            width: 100%;
          }
        }
      }
    }


  }

}
</style>