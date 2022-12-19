<script>

</script>

<template>
  <div class="section-wrapper">
    <div class="borders border-section">
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
                <video autoplay loop>
                  <source src="../assets/img/SectionVideo.mp4" type="video/mp4">
                </video>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="borders">
      <div class="second-section">
        <div class="section-image-container">
          <div class="section-image">
            <img src="../assets/img/SectionDevices.png" alt="Supported Devices">
            <div class="section-video">
              <div class="video">
                <video autoplay loop>
                  <source src="../assets/img/SectionDevicesVideo.mp4" type="video/mp4">
                </video>
              </div>
            </div>
          </div>
        </div>
        <div class="section-text">
          <h1>Guarda Netflix ovunque.</h1>
          <h2>
            Cellulare, tablet, laptop e TV: scegli tu cosa usare per guardare in streaming film e serie TV senza limiti
            e
            senza
            spendere di più.
          </h2>
        </div>
      </div>
    </div>
    <div class="borders">
      <div class="third-section">
        <div class="section-text">
          <h1>Crea profili per i bambini.</h1>
          <h2>
            I bambini scoprono nuove avventure in compagnia dei loro personaggi preferiti in uno spazio tutto loro già
            incluso nel
            tuo abbonamento.
          </h2>
        </div>
        <div class="section-image-container">
          <div class="section-image">
            <img src="../assets/img/SectionKids.png" alt="Kids illustration">
          </div>
        </div>
      </div>
    </div>
    <div class="borders">
      <div class="forth-section">
        <div class="section-image-container">
          <div class="section-image">
            <img src="../assets/img/SectionMobile.jpg" alt="Mobile Devices App">
            <div class="download-card">
              <div class="download-image">
                <img src="../assets/img/MobileSectionBoxshot.png" alt="">
              </div>
              <div class="download-text">
                <div>
                  Stranger Things
                </div>
                <div class="status">
                  Download in corso...
                </div>
              </div>
              <div class="download-custom"></div>
            </div>
          </div>
        </div>
        <div class="section-text">
          <h1>Scarica le tue serie da guardare offline.</h1>
          <h2>
            Download disponibili in tutti i piani tranne Base con pubblicità.
          </h2>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '../styles/general.scss' as *;

.section-wrapper {
  margin-top: 363px;
  padding: 350px 0 100px 0;
  background-color: black;
  color: #fff;
  margin-bottom: 0;
  position: relative;

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

  .border-section {
    padding-bottom: 80px !important;
    border-top: 8px solid #222;
  }

  .borders {
    padding-bottom: 150px;
    border-bottom: 8px solid #222;
  }

  .first-section {
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 150px auto;
    max-width: 1100px;

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

  .second-section {
    padding-top: 100px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1100px;

    .section-image {
      position: relative;

      img {
        border: 0;
        height: auto;
        max-width: 100%;
        z-index: 888;
        position: relative;
      }

      .section-video {
        position: absolute;
        bottom: 42%;
        right: 0;
        left: 20%;
        width: 60%;

        .video video {
          height: 100%;
          width: 100%;
        }
      }
    }
  }

  .third-section {
    padding-top: 100px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1100px;
  }

  .forth-section {
    padding-top: 100px;
    align-items: center;
    display: flex;
    justify-content: space-between;
    margin: 0 auto;
    max-width: 1200px;

    .section-image-container {
      width: 48%;

      .section-image {
        position: relative;
        margin: -8% 0 -4% -15%;
        padding: .5em .75em;

        .download-card {
          align-items: center;
          background: #000;
          border: 2px solid hsla(0, 0%, 100%, .25);
          border-radius: .75em;
          bottom: 8%;
          box-shadow: 0 0 2em 0 #000;
          display: flex;
          left: 50%;
          margin: 0 auto;
          min-width: 15em;
          padding: .25em .65em;
          position: absolute;
          transform: translateX(-50%);
          width: 65%;

          .download-image {
            margin: 0 1em 0 0;
            width: 16%;
          }

          .download-text {
            flex-grow: 1;
            flex-shrink: 1;
            margin: .3em 0;

            div {
              font-size: 1em;
              color: #fff;
              font-weight: 500;
            }

            .status {
              font-size: .9em;
              color: #0071eb;
              font-weight: 400;
            }
          }

          .download-custom {
            background: url("../assets/img/DownloadIcon.gif") 50% no-repeat;
            background-size: auto;
            background-size: 100%;
            content: "";
            display: block;
            flex-grow: 0;
            flex-shrink: 0;
            height: 3em;
            outline: 2px solid #000;
            outline-offset: -2px;
            width: 3em;
          }
        }
      }
    }


  }
}
</style>