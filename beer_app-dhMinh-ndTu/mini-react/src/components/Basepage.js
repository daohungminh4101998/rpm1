import { useState } from "react";
import "../assets/css/Base.css";
import { useHistory } from "react-router-dom";


function Basepage() {
    
    return (
        <div className="wrapper">
  <header className="header">
    <div className="grid wide fix-wide-on-tablet">
      {/* Header navbar */}
      <nav className="header__navbar hide-on-mobile-tablet">
        <ul className="header__navbar-list">
          <li className="header__navbar-item header__navber-item--has-link header__navbar-item--separate">
            Vào cửa hàng trên ứng dụng MH Shop
            <div className="header__qr">
              <img src="assets/img/qr_code.png" alt="QR CODE" className="header__qr-img" />
              <div className="header__qr-apps">
                <a href="#" className="header__qr-link">
                  <img src="assets/img/google_play.png" alt="Google Play" className="header__qr-download-img" />
                </a>
                <a href="#" className="header__qr-link">
                  <img src="assets/img/app_store.png" alt="App Store" className="header__qr-download-img" />
                </a>
              </div>
            </div>
          </li>
          <li className="header__navbar-item">
            <span className="header__navbar-title--no-pointer">
              Kết nối
            </span>
            <a href="#" className="header__navbar-icon-link">
              <i className="header__navbar-icon fab fa-facebook" />
            </a>
            <a href="#" className="header__navbar-icon-link">
              <i className="header__navbar-icon fab fa-instagram" />
            </a>
          </li>
        </ul>
        <ul className="header__navbar-list">
          <li className="header__navbar-item header__navber-item--has-notify">
            <a href="#" className="header__navbar-item-link">
              <i className="header__navbar-icon far fa-bell" />
              Thông báo
            </a>
            <div className="header__notify">
              <header className="header__notify-header">
                <h3>Thông báo mới nhận</h3>
              </header>
              <ul className="header__notify-list">
                <li className="header__notify-item">
                  <a href="#" className="header__notify-link">
                    <img src="https://cf.shopee.vn/file/aebbec31c262e22639dc6ecc75179b16_tn" alt="" className="header__notify-img" />
                    <div className="header__notify-info">
                      <span className="header__notify-name">Mỹ phẩm Ohui chính hãng Mỹ phẩm Ohui chính hãng Mỹ phẩm Ohui chính hãng Mỹ phẩm Ohui chính hãng</span>
                      <span className="header__notify-descriotion">Mô tả Ohui chính hãng Ohui chính hãng Mô tả Ohui chính hãng Ohui chính hãng Mô tả Ohui chính hãng Ohui chính hãng</span>
                    </div>
                  </a>
                </li>
                <li className="header__notify-item">
                  <a href="#" className="header__notify-link">
                    <img src="https://cf.shopee.vn/file/4fc67eef124763f71f8a1a928b2f209d" alt="" className="header__notify-img" />
                    <div className="header__notify-info">
                      <span className="header__notify-name">Váy polo cổ đức cực năng động. Váy polo siêu hot</span>
                      <span className="header__notify-descriotion">Khách chưa rõ size số vui lòng nt tư vấn trước khi mua hàng để tránh tình trạng chật rộng shop k.</span>
                    </div>
                  </a>
                </li>
                <li className="header__notify-item">
                  <a href="#" className="header__notify-link">
                    <img src="https://cf.shopee.vn/file/dd3768d68449b9c4e5dc653339443dfd" alt="" className="header__notify-img" />
                    <div className="header__notify-info">
                      <span className="header__notify-name">Váy Nữ Caro Cổ Vuông Ôm Body Chiết Eo Sang Chảnh Sun.z</span>
                      <span className="header__notify-descriotion">Tư vấn nhanh chóng, nếu bạn có bất kỳ câu hỏi nào, vui lòng hỏi và trò chuyện, chúng tôi sẽ phục vụ bạn trực tuyến online hằng ngày</span>
                    </div>
                  </a>
                </li>
                <li className="header__notify-item header__notify-item--viewed">
                  <a href="#" className="header__notify-link">
                    <img src="https://cf.shopee.vn/file/4b7af8582e7b284216da68e982785141" alt="" className="header__notify-img" />
                    <div className="header__notify-info">
                      <span className="header__notify-name">Zara Mickey hot hit lại sản xuất thêm rồi.</span>
                      <span className="header__notify-descriotion">Vừa xinh vừa dễ phối đồ. Phiên bản đạp gót của Zara là ưng nhất trong các loại đạp gót luôn ạ</span>
                    </div>
                  </a>
                </li>
                <li className="header__notify-item header__notify-item--viewed">
                  <a href="#" className="header__notify-link">
                    <img src="https://cf.shopee.vn/file/e7e789acc9bd94486e32acc961b9227e" alt="" className="header__notify-img" />
                    <div className="header__notify-info">
                      <span className="header__notify-name">Giày bệt nơ chất liệu da lộn hàng chuẩn đẹp</span>
                      <span className="header__notify-descriotion">Cách đặt nhiều sản phẩm/mẫu/màu gộp 1 đơn hàng: Bạn chọn các sản phẩm cần mua</span>
                    </div>
                  </a>
                </li>
                <li className="header__notify-item header__notify-item--viewed">
                  <a href="#" className="header__notify-link">
                    <img src="https://cf.shopee.vn/file/4b7af8582e7b284216da68e982785141" alt="" className="header__notify-img" />
                    <div className="header__notify-info">
                      <span className="header__notify-name">Zara Mickey hot hit lại sản xuất thêm rồi.</span>
                      <span className="header__notify-descriotion">Vừa xinh vừa dễ phối đồ. Phiên bản đạp gót của Zara là ưng nhất trong các loại đạp gót luôn ạ</span>
                    </div>
                  </a>
                </li>
                <li className="header__notify-item header__notify-item--viewed">
                  <a href="#" className="header__notify-link">
                    <img src="https://cf.shopee.vn/file/e7e789acc9bd94486e32acc961b9227e" alt="" className="header__notify-img" />
                    <div className="header__notify-info">
                      <span className="header__notify-name">Giày bệt nơ chất liệu da lộn hàng chuẩn đẹp</span>
                      <span className="header__notify-descriotion">Cách đặt nhiều sản phẩm/mẫu/màu gộp 1 đơn hàng: Bạn chọn các sản phẩm cần mua</span>
                    </div>
                  </a>
                </li>
                <li className="header__notify-item header__notify-item--viewed">
                  <a href="#" className="header__notify-link">
                    <img src="https://cf.shopee.vn/file/4b7af8582e7b284216da68e982785141" alt="" className="header__notify-img" />
                    <div className="header__notify-info">
                      <span className="header__notify-name">Zara Mickey hot hit lại sản xuất thêm rồi.</span>
                      <span className="header__notify-descriotion">Vừa xinh vừa dễ phối đồ. Phiên bản đạp gót của Zara là ưng nhất trong các loại đạp gót luôn ạ</span>
                    </div>
                  </a>
                </li>
                <li className="header__notify-item header__notify-item--viewed">
                  <a href="#" className="header__notify-link">
                    <img src="https://cf.shopee.vn/file/e7e789acc9bd94486e32acc961b9227e" alt="" className="header__notify-img" />
                    <div className="header__notify-info">
                      <span className="header__notify-name">Giày bệt nơ chất liệu da lộn hàng chuẩn đẹp</span>
                      <span className="header__notify-descriotion">Cách đặt nhiều sản phẩm/mẫu/màu gộp 1 đơn hàng: Bạn chọn các sản phẩm cần mua</span>
                    </div>
                  </a>
                </li>
              </ul>
              <footer className="header__notify-footer">
                <a href="#" className="header__notify-footer-btn">
                  Xem tất cả
                </a>
              </footer>
            </div>
          </li>
          <li className="header__navbar-item">
            <a href="#" className="header__navbar-item-link">
              <i className="header__navbar-icon far fa-question-circle" />
              Trợ giúp
            </a>
          </li>
          {/* <li class="header__navbar-item header__navbar-item--bold header__navbar-item--separate">Đăng kí</li>
                  <li class="header__navbar-item header__navbar-item--bold">Đăng nhập</li> */}
          <li className="header__navbar-item header__navbar-user">
            <img src="https://yt3.ggpht.com/yti/ANoDKi5pv5fU3lXkrswX8iF2gEL5yetOMwkB3vUMdHEHPg=s88-c-k-c0x00ffffff-no-rj-mo" alt="Username" className="header__navbar-user-img" />
            <span className="header__navbar-user-name">Mark Han</span>
            <ul className="header__navbar-user-menu">
              <li className="header__navbar-user-item"><a href="#">Tài khoản của tôi</a></li>
              <li className="header__navbar-user-item"><a href="#">Địa chỉ của tôi</a></li>
              <li className="header__navbar-user-item"><a href="#">Đơn mua</a></li>
              <li className="header__navbar-user-item header__navbar-user-item--separate"><a href="#">Đăng xuất</a></li>
            </ul>
          </li>
        </ul>
      </nav>
      {/* Header with search */}
      <div className="header-with-search">
        {/* List Mobile icon */}
        <label htmlFor="mobile-list-input" className="header__mobile-list">
          <i className="header__mobile-list-icon fas fa-bars" />
        </label>
        {/* Search mobile icon */}
        <label htmlFor="mobile-search-input" className="header__mobile-search">
          <i className="header__mobile-search-icon fas fa-search" />
        </label>                           
        {/* Logo */}
        <div className="header__logo">
          <a href="index.html" className="header__logo-link">
            <svg viewBox="0 0 192 65" className="header__logo-img">
              <g fillRule="evenodd">
                <path fill="#fff" d="M35.6717403 44.953764c-.3333497 2.7510509-2.0003116 4.9543414-4.5823845 6.0575984-1.4379707.6145919-3.36871.9463856-4.896954.8421628-2.3840266-.0911143-4.6237865-.6708937-6.6883352-1.7307424-.7375522-.3788551-1.8370513-1.1352759-2.6813095-1.8437757-.213839-.1790053-.239235-.2937577-.0977428-.4944671.0764015-.1151823.2172535-.3229831.5286218-.7791994.45158-.6616533.5079208-.7446018.5587128-.8221779.14448-.2217688.3792333-.2411091.6107855-.0588804.0243289.0189105.0243289.0189105.0426824.0333083.0379873.0294402.0379873.0294402.1276204.0990653.0907002.0706996.14448.1123887.166248.1287205 2.2265285 1.7438508 4.8196989 2.7495466 7.4376251 2.8501162 3.6423042-.0496401 6.2615109-1.6873341 6.7308041-4.2020035.5160305-2.7675977-1.6565047-5.1582742-5.9070334-6.4908212-1.329344-.4166762-4.6895175-1.7616869-5.3090528-2.1250697-2.9094471-1.7071043-4.2697358-3.9430584-4.0763845-6.7048539.296216-3.8283059 3.8501677-6.6835796 8.340785-6.702705 2.0082079-.004083 4.0121475.4132378 5.937338 1.2244562.6816382.2873109 1.8987274.9496089 2.3189359 1.2633517.2420093.1777159.2898136.384872.1510957.60836-.0774686.12958-.2055158.3350171-.4754821.7632974l-.0029878.0047276c-.3553311.5640922-.3664286.5817134-.447952.7136572-.140852.2144625-.3064598.2344475-.5604202.0732783-2.0600669-1.3839063-4.3437898-2.0801572-6.8554368-2.130442-3.126914.061889-5.4706057 1.9228561-5.6246892 4.4579402-.0409751 2.2896772 1.676352 3.9613243 5.3858811 5.2358503 7.529819 2.4196871 10.4113092 5.25648 9.869029 9.7292478M26.3725216 5.42669372c4.9022893 0 8.8982174 4.65220288 9.0851664 10.47578358H17.2875686c.186949-5.8235807 4.1828771-10.47578358 9.084953-10.47578358m25.370857 11.57065968c0-.6047069-.4870064-1.0948761-1.0875481-1.0948761h-11.77736c-.28896-7.68927544-5.7774923-13.82058185-12.5059489-13.82058185-6.7282432 0-12.2167755 6.13130641-12.5057355 13.82058185l-11.79421958.0002149c-.59136492.0107446-1.06748731.4968309-1.06748731 1.0946612 0 .0285807.00106706.0569465.00320118.0848825H.99995732l1.6812605 37.0613963c.00021341.1031483.00405483.2071562.01173767.3118087.00170729.0236381.003628.0470614.00554871.0704847l.00362801.0782207.00405483.004083c.25545428 2.5789222 2.12707837 4.6560709 4.67201764 4.7519129l.00576212.0055872h37.4122078c.0177132.0002149.0354264.0004298.0531396.0004298.0177132 0 .0354264-.0002149.0531396-.0004298h.0796027l.0017073-.0015043c2.589329-.0706995 4.6867431-2.1768587 4.9082648-4.787585l.0012805-.0012893.0017073-.0350275c.0021341-.0275062.0040548-.0547975.0057621-.0823037.0040548-.065757.0068292-.1312992.0078963-.1964115l1.8344904-37.207738h-.0012805c.001067-.0186956.0014939-.0376062.0014939-.0565167M176.465457 41.1518926c.720839-2.3512494 2.900423-3.9186779 5.443734-3.9186779 2.427686 0 4.739107 1.6486899 5.537598 3.9141989l.054826.1556978h-11.082664l.046506-.1512188zm13.50267 3.4063683c.014933.0006399.014933.0006399.036906.0008531.021973-.0002132.021973-.0002132.044372-.0008531.53055-.0243144.950595-.4766911.950595-1.0271786 0-.0266606-.000853-.0496953-.00256-.0865936.000427-.0068251.000427-.020262.000427-.0635588 0-5.1926268-4.070748-9.4007319-9.09145-9.4007319-5.020488 0-9.091235 4.2081051-9.091235 9.4007319 0 .3871116.022399.7731567.067838 1.1568557l.00256.0204753.01408.1013102c.250022 1.8683731 1.047233 3.5831812 2.306302 4.9708108-.00064-.0006399.00064.0006399.007253.0078915 1.396026 1.536289 3.291455 2.5833031 5.393601 2.9748936l.02752.0053321v-.0027727l.13653.0228215c.070186.0119439.144211.0236746.243409.039031 2.766879.332724 5.221231-.0661182 7.299484-1.1127057.511777-.2578611.971928-.5423827 1.37064-.8429007.128211-.0968312.243622-.1904632.34346-.2781231.051412-.0452164.092372-.083181.114131-.1051493.468898-.4830897.498124-.6543572.215249-1.0954297-.31146-.4956734-.586228-.9179769-.821744-1.2675504-.082345-.1224254-.154023-.2267215-.214396-.3133151-.033279-.0475624-.033279-.0475624-.054399-.0776356-.008319-.0117306-.008319-.0117306-.013866-.0191956l-.00256-.0038391c-.256208-.3188605-.431565-.3480805-.715933-.0970445-.030292.0268739-.131624.1051493-.14997.1245582-1.999321 1.775381-4.729508 2.3465571-7.455854 1.7760208-.507724-.1362888-.982595-.3094759-1.419919-.5184948-1.708127-.8565509-2.918343-2.3826022-3.267563-4.1490253l-.02752-.1394881h13.754612zM154.831964 41.1518926c.720831-2.3512494 2.900389-3.9186779 5.44367-3.9186779 2.427657 0 4.739052 1.6486899 5.537747 3.9141989l.054612.1556978h-11.082534l.046505-.1512188zm13.502512 3.4063683c.015146.0006399.015146.0006399.037118.0008531.02176-.0002132.02176-.0002132.044159-.0008531.530543-.0243144.950584-.4766911.950584-1.0271786 0-.0266606-.000854-.0496953-.00256-.0865936.000426-.0068251.000426-.020262.000426-.0635588 0-5.1926268-4.070699-9.4007319-9.091342-9.4007319-5.020217 0-9.091343 4.2081051-9.091343 9.4007319 0 .3871116.022826.7731567.068051 1.1568557l.00256.0204753.01408.1013102c.250019 1.8683731 1.04722 3.5831812 2.306274 4.9708108-.00064-.0006399.00064.0006399.007254.0078915 1.396009 1.536289 3.291417 2.5833031 5.393538 2.9748936l.027519.0053321v-.0027727l.136529.0228215c.070184.0119439.144209.0236746.243619.039031 2.766847.332724 5.22117-.0661182 7.299185-1.1127057.511771-.2578611.971917-.5423827 1.370624-.8429007.128209-.0968312.243619-.1904632.343456-.2781231.051412-.0452164.09237-.083181.11413-.1051493.468892-.4830897.498118-.6543572.215246-1.0954297-.311457-.4956734-.586221-.9179769-.821734-1.2675504-.082344-.1224254-.154022-.2267215-.21418-.3133151-.033492-.0475624-.033492-.0475624-.054612-.0776356-.008319-.0117306-.008319-.0117306-.013866-.0191956l-.002346-.0038391c-.256419-.3188605-.431774-.3480805-.716138-.0970445-.030292.0268739-.131623.1051493-.149969.1245582-1.999084 1.775381-4.729452 2.3465571-7.455767 1.7760208-.507717-.1362888-.982582-.3094759-1.419902-.5184948-1.708107-.8565509-2.918095-2.3826022-3.267311-4.1490253l-.027733-.1394881h13.754451zM138.32144123 49.7357905c-3.38129629 0-6.14681004-2.6808521-6.23169343-6.04042014v-.31621743c.08401943-3.35418649 2.85039714-6.03546919 6.23169343-6.03546919 3.44242097 0 6.23320537 2.7740599 6.23320537 6.1960534 0 3.42199346-2.7907844 6.19605336-6.23320537 6.19605336m.00172791-15.67913203c-2.21776751 0-4.33682838.7553485-6.03989586 2.140764l-.19352548.1573553V34.6208558c0-.4623792-.0993546-.56419733-.56740117-.56419733h-2.17651376c-.47409424 0-.56761716.09428403-.56761716.56419733v27.6400724c0 .4539841.10583425.5641973.56761716.5641973h2.17651376c.46351081 0 .56740117-.1078454.56740117-.5641973V50.734168l.19352548.1573553c1.70328347 1.3856307 3.82234434 2.1409792 6.03989586 2.1409792 5.27140956 0 9.54473746-4.2479474 9.54473746-9.48802964 0-5.239867-4.2733279-9.48781439-9.54473746-9.48781439M115.907646 49.5240292c-3.449458 0-6.245805-2.7496948-6.245805-6.1425854 0-3.3928907 2.79656-6.1427988 6.245805-6.1427988 3.448821 0 6.24538 2.7499081 6.24538 6.1427988 0 3.3926772-2.796346 6.1425854-6.24538 6.1425854m.001914-15.5438312c-5.28187 0-9.563025 4.2112903-9.563025 9.4059406 0 5.1944369 4.281155 9.4059406 9.563025 9.4059406 5.281657 0 9.562387-4.2115037 9.562387-9.4059406 0-5.1946503-4.280517-9.4059406-9.562387-9.4059406M94.5919049 34.1890939c-1.9281307 0-3.7938902.6198995-5.3417715 1.7656047l-.188189.1393105V23.2574169c0-.4254677-.1395825-.5643476-.5649971-.5643476h-2.2782698c-.4600414 0-.5652122.1100273-.5652122.5643476v29.2834155c0 .443339.1135587.5647782.5652122.5647782h2.2782698c.4226187 0 .5649971-.1457701.5649971-.5647782v-9.5648406c.023658-3.011002 2.4931278-5.4412923 5.5299605-5.4412923 3.0445753 0 5.516841 2.4421328 5.5297454 5.4630394v9.5430935c0 .4844647.0806524.5645628.5652122.5645628h2.2726775c.481764 0 .565212-.0824666.565212-.5645628v-9.5710848c-.018066-4.8280677-4.0440197-8.7806537-8.9328471-8.7806537M62.8459442 47.7938061l-.0053397.0081519c-.3248668.4921188-.4609221.6991347-.5369593.8179812-.2560916.3812097-.224267.551113.1668119.8816949.91266.7358184 2.0858968 1.508535 2.8774525 1.8955369 2.2023021 1.076912 4.5810275 1.646045 7.1017886 1.6975309 1.6283921.0821628 3.6734936-.3050536 5.1963734-.9842376 2.7569891-1.2298679 4.5131066-3.6269626 4.8208863-6.5794607.4985136-4.7841067-2.6143125-7.7747902-10.6321784-10.1849709l-.0021359-.0006435c-3.7356476-1.2047686-5.4904836-2.8064071-5.4911243-5.0426086.1099976-2.4715346 2.4015793-4.3179454 5.4932602-4.4331449 2.4904317.0062212 4.6923065.6675996 6.8557356 2.0598624.4562232.2767364.666607.2256796.9733188-.172263.035242-.0587797.1332787-.2012238.543367-.790093l.0012815-.0019308c.3829626-.5500403.5089793-.7336731.5403767-.7879478.258441-.4863266.2214903-.6738208-.244985-1.0046173-.459427-.3290803-1.7535544-1.0024722-2.4936356-1.2978721-2.0583439-.8211991-4.1863175-1.2199998-6.3042524-1.1788111-4.8198184.1046878-8.578747 3.2393171-8.8265087 7.3515337-.1572005 2.9703036 1.350301 5.3588174 4.5000778 7.124567.8829712.4661613 4.1115618 1.6865902 5.6184225 2.1278667 4.2847814 1.2547527 6.5186944 3.5630343 6.0571315 6.2864205-.4192725 2.4743234-3.0117991 4.1199394-6.6498372 4.2325647-2.6382344-.0549182-5.2963324-1.0217793-7.6043603-2.7562084-.0115337-.0083664-.0700567-.0519149-.1779185-.1323615-.1516472-.1130543-.1516472-.1130543-.1742875-.1300017-.4705335-.3247898-.7473431-.2977598-1.0346184.1302162-.0346012.0529875-.3919333.5963776-.5681431.8632459" />
              </g>
            </svg>
          </a>
        </div>
        <input type="checkbox" name id="mobile-search-input" className="header__search-checkbox" hidden />
        <div className="header__search">
          <div className="header__search-input-wrap">
            <input type="text" className="header__search-input" placeholder="Tìm kiếm sản phẩm" />
            {/* Search history */}
            <div className="header__search-history">
              <h3 className="header__search-history-heading">Lịch sử tìm kiếm</h3>
              <ul className="header__search-history-list">
                <li className="header__search-history-item">
                  <a href="#">kodoku</a>
                </li>
                <li className="header__search-history-item">
                  <a href="#">đẹp trai</a>
                </li>
                <li className="header__search-history-item">
                  <a href="#">vcl luôn</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="header__search-select">
            <span className="header__search-select-label">Trong shop</span>
            <i className="header__search-select-icon fas fa-angle-down" />
            <ul className="header__search-option">
              <li className="header__search-option-item header__search-option-item--active">
                <span>Trong shop</span>
                <i className="fas fa-check" />
              </li>
              <li className="header__search-option-item">
                <span>Ngoài shop</span>
                <i className="fas fa-check" />
              </li>
            </ul>
          </div>
          <button className="header__search-btn">
            <i className="header__search-btn-icon fas fa-search" />
          </button>
        </div>
        <label htmlFor="header__mobile-notify" className="header__notify-mobile">
          <i className="header__notify-mobile--icon far fa-bell" />           
          <span className="header__notify-mobile--notice">5+</span>                 
        </label>
        <input type="checkbox" hidden name id="header__mobile-notify" className="header__mobile-noti" />
        <label htmlFor="header__mobile-notify" className="header__mobile-notify--overlay" />
        <div className="header__notify">
          <header className="header__notify-header">
            <h3>Thông báo mới nhận</h3>
          </header>
          <ul className="header__notify-list">
            <li className="header__notify-item">
              <a href="#" className="header__notify-link">
                <img src="https://cf.shopee.vn/file/aebbec31c262e22639dc6ecc75179b16_tn" alt="" className="header__notify-img" />
                <div className="header__notify-info">
                  <span className="header__notify-name">Mỹ phẩm Ohui chính hãng Mỹ phẩm Ohui chính hãng Mỹ phẩm Ohui chính hãng Mỹ phẩm Ohui chính hãng</span>
                  <span className="header__notify-descriotion">Mô tả Ohui chính hãng Ohui chính hãng Mô tả Ohui chính hãng Ohui chính hãng Mô tả Ohui chính hãng Ohui chính hãng</span>
                </div>
              </a>
            </li>
            <li className="header__notify-item">
              <a href="#" className="header__notify-link">
                <img src="https://cf.shopee.vn/file/4fc67eef124763f71f8a1a928b2f209d" alt="" className="header__notify-img" />
                <div className="header__notify-info">
                  <span className="header__notify-name">Váy polo cổ đức cực năng động. Váy polo siêu hot</span>
                  <span className="header__notify-descriotion">Khách chưa rõ size số vui lòng nt tư vấn trước khi mua hàng để tránh tình trạng chật rộng shop k.</span>
                </div>
              </a>
            </li>
            <li className="header__notify-item">
              <a href="#" className="header__notify-link">
                <img src="https://cf.shopee.vn/file/dd3768d68449b9c4e5dc653339443dfd" alt="" className="header__notify-img" />
                <div className="header__notify-info">
                  <span className="header__notify-name">Váy Nữ Caro Cổ Vuông Ôm Body Chiết Eo Sang Chảnh Sun.z</span>
                  <span className="header__notify-descriotion">Tư vấn nhanh chóng, nếu bạn có bất kỳ câu hỏi nào, vui lòng hỏi và trò chuyện, chúng tôi sẽ phục vụ bạn trực tuyến online hằng ngày</span>
                </div>
              </a>
            </li>
            <li className="header__notify-item header__notify-item--viewed">
              <a href="#" className="header__notify-link">
                <img src="https://cf.shopee.vn/file/4b7af8582e7b284216da68e982785141" alt="" className="header__notify-img" />
                <div className="header__notify-info">
                  <span className="header__notify-name">Zara Mickey hot hit lại sản xuất thêm rồi.</span>
                  <span className="header__notify-descriotion">Vừa xinh vừa dễ phối đồ. Phiên bản đạp gót của Zara là ưng nhất trong các loại đạp gót luôn ạ</span>
                </div>
              </a>
            </li>
            <li className="header__notify-item header__notify-item--viewed">
              <a href="#" className="header__notify-link">
                <img src="https://cf.shopee.vn/file/e7e789acc9bd94486e32acc961b9227e" alt="" className="header__notify-img" />
                <div className="header__notify-info">
                  <span className="header__notify-name">Giày bệt nơ chất liệu da lộn hàng chuẩn đẹp</span>
                  <span className="header__notify-descriotion">Cách đặt nhiều sản phẩm/mẫu/màu gộp 1 đơn hàng: Bạn chọn các sản phẩm cần mua</span>
                </div>
              </a>
            </li>
            <li className="header__notify-item header__notify-item--viewed">
              <a href="#" className="header__notify-link">
                <img src="https://cf.shopee.vn/file/4b7af8582e7b284216da68e982785141" alt="" className="header__notify-img" />
                <div className="header__notify-info">
                  <span className="header__notify-name">Zara Mickey hot hit lại sản xuất thêm rồi.</span>
                  <span className="header__notify-descriotion">Vừa xinh vừa dễ phối đồ. Phiên bản đạp gót của Zara là ưng nhất trong các loại đạp gót luôn ạ</span>
                </div>
              </a>
            </li>
            <li className="header__notify-item header__notify-item--viewed">
              <a href="#" className="header__notify-link">
                <img src="https://cf.shopee.vn/file/e7e789acc9bd94486e32acc961b9227e" alt="" className="header__notify-img" />
                <div className="header__notify-info">
                  <span className="header__notify-name">Giày bệt nơ chất liệu da lộn hàng chuẩn đẹp</span>
                  <span className="header__notify-descriotion">Cách đặt nhiều sản phẩm/mẫu/màu gộp 1 đơn hàng: Bạn chọn các sản phẩm cần mua</span>
                </div>
              </a>
            </li>
            <li className="header__notify-item header__notify-item--viewed">
              <a href="#" className="header__notify-link">
                <img src="https://cf.shopee.vn/file/4b7af8582e7b284216da68e982785141" alt="" className="header__notify-img" />
                <div className="header__notify-info">
                  <span className="header__notify-name">Zara Mickey hot hit lại sản xuất thêm rồi.</span>
                  <span className="header__notify-descriotion">Vừa xinh vừa dễ phối đồ. Phiên bản đạp gót của Zara là ưng nhất trong các loại đạp gót luôn ạ</span>
                </div>
              </a>
            </li>
            <li className="header__notify-item header__notify-item--viewed">
              <a href="#" className="header__notify-link">
                <img src="https://cf.shopee.vn/file/e7e789acc9bd94486e32acc961b9227e" alt="" className="header__notify-img" />
                <div className="header__notify-info">
                  <span className="header__notify-name">Giày bệt nơ chất liệu da lộn hàng chuẩn đẹp</span>
                  <span className="header__notify-descriotion">Cách đặt nhiều sản phẩm/mẫu/màu gộp 1 đơn hàng: Bạn chọn các sản phẩm cần mua</span>
                </div>
              </a>
            </li>
          </ul>
          <footer className="header__notify-footer">
            <a href="#" className="header__notify-footer-btn">
              Xem tất cả
            </a>
          </footer>
        </div>
        {/* Cart layout */}
        <div className="header__cart">
          <div className="header__cart-wrap">
            <i className="header__cart-icon fas fa-shopping-cart" />
            <span className="header__cart-notice">4</span>
            {/* No cart: header__cart-list--no-cart */}
            <div className="header__cart-list">
              <img src="assets/img/no-cart.png" alt="" className="header__cart-no-cart-img" />
              <span className="header__cart-list--no-cart-msg">Chưa có sản phẩm</span>
              <h4 className="header__cart-heading">Sản phẩm đã thêm</h4>
              <ul className="header__cart-list-item">
                <li className="header__cart-item">
                  <img src="https://cf.shopee.vn/file/4b7af8582e7b284216da68e982785141" alt="Bộ kem sáng da mềm mịn" className="header__cart-img" />
                  <div className="header__cart-item-info">
                    <div className="header__cart-item-head">
                      <h5 className="header__cart-item-name">Bộ kem sáng da mềm mịn miệng mắt tai chân luôn mắt tai chân luôn mắt tai chân luôn</h5>
                      <div className="header__cart-item-price-wrap">
                        <span className="header__cart-item-price">2.000.000đ</span>
                        <span className="header__cart-item-multiply">x</span>
                        <span className="header__cart-item-qnt">1</span>
                      </div>
                    </div>
                    <div className="header__cart-item-body">
                      <span className="header__cart-item-description">
                        Phân chia loại sản phẩm Phân chia loại sản phẩm Phân chia loại sản phẩm
                      </span>
                      <span className="header__cart-item-del">
                        Xóa
                      </span>
                    </div>
                  </div>
                </li>
                <li className="header__cart-item">
                  <img src="https://cf.shopee.vn/file/4fc67eef124763f71f8a1a928b2f209d" alt="Bộ kem sáng da mềm mịn" className="header__cart-img" />
                  <div className="header__cart-item-info">
                    <div className="header__cart-item-head">
                      <h5 className="header__cart-item-name">Váy polo cổ đức cực năng động</h5>
                      <div className="header__cart-item-price-wrap">
                        <span className="header__cart-item-price">1.305.000đ</span>
                        <span className="header__cart-item-multiply">x</span>
                        <span className="header__cart-item-qnt">1</span>
                      </div>
                    </div>
                    <div className="header__cart-item-body">
                      <span className="header__cart-item-description">
                        Khách chưa rõ size số vui lòng nt cho shop
                      </span>
                      <span className="header__cart-item-del">
                        Xóa
                      </span>
                    </div>
                  </div>
                </li>
                <li className="header__cart-item">
                  <img src="https://cf.shopee.vn/file/aebbec31c262e22639dc6ecc75179b16_tn" alt="Bộ kem sáng da mềm mịn" className="header__cart-img" />
                  <div className="header__cart-item-info">
                    <div className="header__cart-item-head">
                      <h5 className="header__cart-item-name">Zara Mickey hot hit lại</h5>
                      <div className="header__cart-item-price-wrap">
                        <span className="header__cart-item-price">1.030.000đ</span>
                        <span className="header__cart-item-multiply">x</span>
                        <span className="header__cart-item-qnt">1</span>
                      </div>
                    </div>
                    <div className="header__cart-item-body">
                      <span className="header__cart-item-description">
                        Vừa xinh vừa dễ phối đồ đẹp vcl luôn
                      </span>
                      <span className="header__cart-item-del">
                        Xóa
                      </span>
                    </div>
                  </div>
                </li>
                <li className="header__cart-item">
                  <img src="https://cf.shopee.vn/file/dd3768d68449b9c4e5dc653339443dfd" alt="Bộ kem sáng da mềm mịn" className="header__cart-img" />
                  <div className="header__cart-item-info">
                    <div className="header__cart-item-head">
                      <h5 className="header__cart-item-name">Váy Nữ Caro Cổ Vuông Ôm</h5>
                      <div className="header__cart-item-price-wrap">
                        <span className="header__cart-item-price">2.070.000đ</span>
                        <span className="header__cart-item-multiply">x</span>
                        <span className="header__cart-item-qnt">1</span>
                      </div>
                    </div>
                    <div className="header__cart-item-body">
                      <span className="header__cart-item-description">
                        Body Chiết Eo Sang Chảnh Sun.z
                      </span>
                      <span className="header__cart-item-del">
                        Xóa
                      </span>
                    </div>
                  </div>
                </li>
                <li className="header__cart-item">
                  <img src="https://cf.shopee.vn/file/4b7af8582e7b284216da68e982785141" alt="Bộ kem sáng da mềm mịn" className="header__cart-img" />
                  <div className="header__cart-item-info">
                    <div className="header__cart-item-head">
                      <h5 className="header__cart-item-name">Bộ kem sáng da mềm mịn</h5>
                      <div className="header__cart-item-price-wrap">
                        <span className="header__cart-item-price">2.000.000đ</span>
                        <span className="header__cart-item-multiply">x</span>
                        <span className="header__cart-item-qnt">1</span>
                      </div>
                    </div>
                    <div className="header__cart-item-body">
                      <span className="header__cart-item-description">
                        Phân chia loại sản phẩm chia loại sản phẩm chia loại sản phẩm
                      </span>
                      <span className="header__cart-item-del">
                        Xóa
                      </span>
                    </div>
                  </div>
                </li>
                <li className="header__cart-item">
                  <img src="https://cf.shopee.vn/file/4fc67eef124763f71f8a1a928b2f209d" alt="Bộ kem sáng da mềm mịn" className="header__cart-img" />
                  <div className="header__cart-item-info">
                    <div className="header__cart-item-head">
                      <h5 className="header__cart-item-name">Váy polo cổ đức cực năng động</h5>
                      <div className="header__cart-item-price-wrap">
                        <span className="header__cart-item-price">1.305.000đ</span>
                        <span className="header__cart-item-multiply">x</span>
                        <span className="header__cart-item-qnt">1</span>
                      </div>
                    </div>
                    <div className="header__cart-item-body">
                      <span className="header__cart-item-description">
                        Khách chưa rõ size số vui lòng nt chia loại sản phẩm
                      </span>
                      <span className="header__cart-item-del">
                        Xóa
                      </span>
                    </div>
                  </div>
                </li>
                <li className="header__cart-item">
                  <img src="https://cf.shopee.vn/file/aebbec31c262e22639dc6ecc75179b16_tn" alt="Bộ kem sáng da mềm mịn" className="header__cart-img" />
                  <div className="header__cart-item-info">
                    <div className="header__cart-item-head">
                      <h5 className="header__cart-item-name">Zara Mickey hot hit lại</h5>
                      <div className="header__cart-item-price-wrap">
                        <span className="header__cart-item-price">1.030.000đ</span>
                        <span className="header__cart-item-multiply">x</span>
                        <span className="header__cart-item-qnt">1</span>
                      </div>
                    </div>
                    <div className="header__cart-item-body">
                      <span className="header__cart-item-description">
                        Vừa xinh vừa dễ phối đồ đẹp lắm luôn
                      </span>
                      <span className="header__cart-item-del">
                        Xóa
                      </span>
                    </div>
                  </div>
                </li>
                <li className="header__cart-item">
                  <img src="https://cf.shopee.vn/file/dd3768d68449b9c4e5dc653339443dfd" alt="Bộ kem sáng da mềm mịn" className="header__cart-img" />
                  <div className="header__cart-item-info">
                    <div className="header__cart-item-head">
                      <h5 className="header__cart-item-name">Váy Nữ Caro Cổ Vuông Ôm</h5>
                      <div className="header__cart-item-price-wrap">
                        <span className="header__cart-item-price">2.070.000đ</span>
                        <span className="header__cart-item-multiply">x</span>
                        <span className="header__cart-item-qnt">1</span>
                      </div>
                    </div>
                    <div className="header__cart-item-body">
                      <span className="header__cart-item-description">
                        Body Chiết Eo Sang Chảnh Sun.z
                      </span>
                      <span className="header__cart-item-del">
                        Xóa
                      </span>
                    </div>
                  </div>
                </li>
              </ul>
              <div className="header__cart-view-cart">
                <a href="#" className="header__cart-btn btn btn--primary">Xem giỏ hàng</a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <input type="checkbox" hidden className="nav__input" id="mobile-list-input" />
      <label htmlFor="mobile-list-input" className="nav__overlay" />
      <nav className="header__mobile-nav">
        <div className="header__mobile-nav--heading">
          <img src="https://yt3.ggpht.com/yti/ANoDKi5pv5fU3lXkrswX8iF2gEL5yetOMwkB3vUMdHEHPg=s88-c-k-c0x00ffffff-no-rj-mo" alt="Hồ Hoàng Phú" className="header__mobile-nav--img" />
          <div className="header__mobile-nav--text">
            <h2 className="header__mobile-name">Mark Han</h2>
            <span className="header__mobile-rule">
              <i className="header__mobile-rule--icon fas fa-user-shield" />
              Admin
            </span>
          </div>
          <label htmlFor="mobile-list-input" className="header__mobile-close">
            <i className="header__mobile-close-icon fas fa-times" />
          </label>
        </div>
        <ul className="header__mobile-nav--list">
          <li>
            <a href="#" className="header__mobile-link">
              <i className="fas fa-home" />
              Trang chủ
            </a>
          </li>
          <li>
            <a href="#" className="header__mobile-link">
              <i className="fas fa-id-card" />
              Thông tin tài khoản
            </a>
          </li>
          <li>
            <a href="#" className="header__mobile-link">
              <i className="fas fa-box" />
              Quản lí đơn hàng
            </a>
          </li>
          <li>
            <a href="#" className="header__mobile-link">
              <i className="fas fa-map-marker-alt" />
              Địa chỉ của tôi
            </a>
          </li>
          <li>
            <a href="#" className="header__mobile-link">
              <i className="fas fa-sign-out-alt" />
              Đăng xuất
            </a>
          </li>
        </ul>
      </nav>
    </div>
    <ul className="header__sort-bar">
      <li className="header__sort-item">
        <a href="#" className="header__sort-link">Liên quan</a>
      </li>
      <li className="header__sort-item header__sort-item--active">
        <a href="#" className="header__sort-link">Mới nhất</a>
      </li>
      <li className="header__sort-item">
        <a href="#" className="header__sort-link">Bán chạy</a>
      </li>
      <li className="header__sort-item">
        <a href="#" className="header__sort-link">Giá</a>
      </li>
    </ul>
  </header>
  <div className="app__container">
    <div className="grid wide fix-wide-on-tablet">
      <div className="row app__content sm-gutter">
        {/* List */}
        <div className="col p-2 t-3 m-0">
          <nav className="category">
            <h3 className="category__heading">Danh mục</h3>
            <ul className="category-list">
              <li className="category-item category-item--active">
                <a href="#" className="category-item__link">Nước hoa Ohui</a>
              </li>
              <li className="category-item category-item__link--more">
                <a href="#" className="category-item__link">
                  Mỹ phẩm cho da 
                  <i className="category-item__link-icon fas fa-angle-right" />
                </a>
                <ul className="category-item__link--list">
                  <li className="category-item__link--item">
                    <a href="#" className="category-item__link">Da khô</a>
                  </li>
                  <li className="category-item__link--item">
                    <a href="#" className="category-item__link">Da mịn</a>
                  </li>
                  <li className="category-item__link--item">
                    <a href="#" className="category-item__link">Da có dầu</a>
                  </li>
                </ul>
              </li>
              <li className="category-item category-item__link--more">
                <a href="#" className="category-item__link">
                  Trang sức vàng
                  <i className="category-item__link-icon fas fa-angle-right" />
                </a>
                <ul className="category-item__link--list">
                  <li className="category-item__link--item">
                    <a href="#" className="category-item__link">Dành cho nam</a>
                  </li>
                  <li className="category-item__link--item">
                    <a href="#" className="category-item__link">Dành cho nữ</a>
                  </li>
                </ul>
              </li>
              <li className="category-item category-item__link--more">
                <a href="#" className="category-item__link">
                  Mỹ phẩm cho da 
                  <i className="category-item__link-icon fas fa-angle-right" />
                </a>
                <ul className="category-item__link--list">
                  <li className="category-item__link--item">
                    <a href="#" className="category-item__link">Da khô</a>
                  </li>
                  <li className="category-item__link--item">
                    <a href="#" className="category-item__link">Da mịn</a>
                  </li>
                  <li className="category-item__link--item">
                    <a href="#" className="category-item__link">Da có dầu</a>
                  </li>
                </ul>
              </li>
              <li className="category-item category-item__link--more">
                <a href="#" className="category-item__link">
                  Trang sức vàng
                  <i className="category-item__link-icon fas fa-angle-right" />
                </a>
                <ul className="category-item__link--list">
                  <li className="category-item__link--item">
                    <a href="#" className="category-item__link">Dành cho nam</a>
                  </li>
                  <li className="category-item__link--item">
                    <a href="#" className="category-item__link">Dành cho nữ</a>
                  </li>
                </ul>
              </li>
              <li className="category-item">
                <a href="#" className="category-item__link">Áo khoác</a>
              </li>
              <li className="category-item">
                <a href="#" className="category-item__link">Giày thể thao</a>
              </li>
              <li className="category-item">
                <a href="#" className="category-item__link">Áo khoác</a>
              </li>
              <li className="category-item">
                <a href="#" className="category-item__link">Giày Nike air</a>
              </li>
            </ul>
          </nav>
        </div>
        <div className="col p-10 t-9 m-12">
          {/* Filter */}
          <div className="home-filter hide-on-mobile-tablet">
            <span className="home-filter__label">Sắp xếp theo</span>
            <button className="home-filter__btn btn">Phổ biến</button>
            <button className="home-filter__btn btn btn--primary">Mới nhất</button>
            <button className="home-filter__btn btn">Bán chạy</button>
            <div className="select-input">
              <span className="select-input__label">Giá</span>
              <i className="select-input__icon fas fa-angle-down" />
              <ul className="select-input__list">
                <li className="select-input__item">
                  <a href="#" className="select-input__link">
                    Giá: Thấp đến cao
                  </a>
                </li>
                <li className="select-input__item">
                  <a href="#" className="select-input__link">
                    Giá: Cao đến thấp
                  </a>
                </li>
              </ul>
            </div>
            <div className="home-filter__page">
              <span className="home-filter__page-num">
                <span className="home-filter__page-current">1</span>/14
              </span>
              <div className="home-filter__page-control">
                <a href="#" className="home-filter__page-btn home-filter__page-btn--disabled">
                  <i className="home-filter__page-icon fas fa-angle-left" />
                </a>
                <a href="#" className="home-filter__page-btn">
                  <i className="home-filter__page-icon fas fa-angle-right" />
                </a>
              </div>
            </div>
          </div>
          {/* Nav list mobile */}
          <nav className="mobile-category">
            <ul className="mobile-category__list">
              <li className="mobile-category__item">
                <a href="#" className="mobile-category__link">Thiết bị gia dụng </a>
              </li>
              <li className="mobile-category__item">
                <a href="#" className="mobile-category__link">Dụng cụ điện tử điện lạnh</a>
              </li>
              <li className="mobile-category__item">
                <a href="#" className="mobile-category__link">Đồ thể thao nam nữ </a>
              </li>
              <li className="mobile-category__item">
                <a href="#" className="mobile-category__link">Thiết bị gia dụng </a>
              </li>
              <li className="mobile-category__item">
                <a href="#" className="mobile-category__link">Dụng cụ điện tử điện lạnh</a>
              </li>
              <li className="mobile-category__item">
                <a href="#" className="mobile-category__link">Đồ thể thao nam nữ </a>
              </li>
              <li className="mobile-category__item">
                <a href="#" className="mobile-category__link">Thiết bị gia dụng </a>
              </li>
              <li className="mobile-category__item">
                <a href="#" className="mobile-category__link">Dụng cụ điện thử điện lạnh</a>
              </li>
              <li className="mobile-category__item">
                <a href="#" className="mobile-category__link">Đồ thể thao nam nữ </a>
              </li>
              <li className="mobile-category__item">
                <a href="#" className="mobile-category__link">Thiết bị gia dụng </a>
              </li>
              <li className="mobile-category__item">
                <a href="#" className="mobile-category__link">Dụng cụ điện tử điện lạnh</a>
              </li>
              <li className="mobile-category__item">
                <a href="#" className="mobile-category__link">Đồ thể thao nam nữ </a>
              </li>
              <li className="mobile-category__item">
                <a href="#" className="mobile-category__link">Thiết bị gia dụng </a>
              </li>
              <li className="mobile-category__item">
                <a href="#" className="mobile-category__link">Dụng cụ điện tử</a>
              </li>
              <li className="mobile-category__item">
                <a href="#" className="mobile-category__link">Đồ thể thao nam nữ </a>
              </li>
            </ul>
          </nav>
          {/* Product */}
          <div className="home-product">
            {/* grid->row->column */}
            <div className="row sm-gutter">
              {/* Product Item */}
              <div className="col p-2-4 t-4 m-6">
                <a className="home-product-item" href="product.html">
                  <div className="home-product-item__img" style={{backgroundImage: 'url(https://cf.shopee.vn/file/33f5f79770cac0eb33db2f02b2e7567c_tn)'}} />
                  <h4 className="home-product-item__name">
                    Set nước hoa hồng Ohui Miracle Moisture Skin Softener Moist
                  </h4>
                  <div className="home-product-item__price">
                    <span className="home-product-item__price-old">1.200.000đ</span>
                    <span className="home-product-item__price-current">999.000đ</span>
                  </div>
                  <div className="home-product-item__action">
                    {/* Liked: home-product-item__like--liked */}
                    <span className="home-product-item__like home-product-item__like--liked">
                      <i className="home-product-item__like-icon-empty far fa-heart" />
                      <i className="home-product-item__like-icon-fill fas fa-heart" />
                    </span>
                    <div className="home-product-item__rating">
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <span className="home-product-item__sold">169 đã bán</span>
                  </div>
                  <div className="home-product-item__origin">
                    <span className="home-product-item__brand">Whoo</span>
                    <span className="home-product-item__origin-name">Nhật Bản</span>
                  </div>
                  <div className="home-product-item__favorite">
                    <i className="fas fa-check" />
                    <span>Yêu thích</span>
                  </div>
                  <div className="home-product-item__sale-off">
                    <span className="home-product-item__sale-off-percent">43%</span>
                    <span className="home-product-item__sale-off-label">GIẢM</span>
                  </div>
                </a>
              </div>
              <div className="col p-2-4 t-4 m-6">
                <a className="home-product-item" href="product.html">
                  <div className="home-product-item__img" style={{backgroundImage: 'url(https://cf.shopee.vn/file/48557d68e3b11497b6a5f577b004cb14_tn)'}} />
                  <h4 className="home-product-item__name">
                    Set nước hoa hồng Ohui Miracle Moisture Skin Softener Moist
                  </h4>
                  <div className="home-product-item__price">
                    <span className="home-product-item__price-old">1.200.000đ</span>
                    <span className="home-product-item__price-current">999.000đ</span>
                  </div>
                  <div className="home-product-item__action">
                    {/* Liked: home-product-item__like--liked */}
                    <span className="home-product-item__like home-product-item__like--liked">
                      <i className="home-product-item__like-icon-empty far fa-heart" />
                      <i className="home-product-item__like-icon-fill fas fa-heart" />
                    </span>
                    <div className="home-product-item__rating">
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <span className="home-product-item__sold">169 đã bán</span>
                  </div>
                  <div className="home-product-item__origin">
                    <span className="home-product-item__brand">Whoo</span>
                    <span className="home-product-item__origin-name">Nhật Bản</span>
                  </div>
                  <div className="home-product-item__favorite">
                    <i className="fas fa-check" />
                    <span>Yêu thích</span>
                  </div>
                  <div className="home-product-item__sale-off">
                    <span className="home-product-item__sale-off-percent">43%</span>
                    <span className="home-product-item__sale-off-label">GIẢM</span>
                  </div>
                </a>
              </div>
              <div className="col p-2-4 t-4 m-6">
                <a className="home-product-item" href="product.html">
                  <div className="home-product-item__img" style={{backgroundImage: 'url(https://cf.shopee.vn/file/ad8fda2186375c80d381c66f87aef14e_tn)'}} />
                  <h4 className="home-product-item__name">
                    Set nước hoa hồng Ohui Miracle Moisture Skin Softener Moist
                  </h4>
                  <div className="home-product-item__price">
                    <span className="home-product-item__price-old">1.200.000đ</span>
                    <span className="home-product-item__price-current">999.000đ</span>
                  </div>
                  <div className="home-product-item__action">
                    {/* Liked: home-product-item__like--liked */}
                    <span className="home-product-item__like home-product-item__like--liked">
                      <i className="home-product-item__like-icon-empty far fa-heart" />
                      <i className="home-product-item__like-icon-fill fas fa-heart" />
                    </span>
                    <div className="home-product-item__rating">
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <span className="home-product-item__sold">169 đã bán</span>
                  </div>
                  <div className="home-product-item__origin">
                    <span className="home-product-item__brand">Whoo</span>
                    <span className="home-product-item__origin-name">Nhật Bản</span>
                  </div>
                  <div className="home-product-item__favorite">
                    <i className="fas fa-check" />
                    <span>Yêu thích</span>
                  </div>
                  <div className="home-product-item__sale-off">
                    <span className="home-product-item__sale-off-percent">43%</span>
                    <span className="home-product-item__sale-off-label">GIẢM</span>
                  </div>
                </a>
              </div>
              <div className="col p-2-4 t-4 m-6">
                <a className="home-product-item" href="product.html">
                  <div className="home-product-item__img" style={{backgroundImage: 'url(https://cf.shopee.vn/file/9310b8a7ce22162e96d1d193af8c9aaa_tn)'}} />
                  <h4 className="home-product-item__name">
                    Set nước hoa hồng Ohui Miracle Moisture Skin Softener Moist
                  </h4>
                  <div className="home-product-item__price">
                    <span className="home-product-item__price-old">1.200.000đ</span>
                    <span className="home-product-item__price-current">999.000đ</span>
                  </div>
                  <div className="home-product-item__action">
                    {/* Liked: home-product-item__like--liked */}
                    <span className="home-product-item__like home-product-item__like--liked">
                      <i className="home-product-item__like-icon-empty far fa-heart" />
                      <i className="home-product-item__like-icon-fill fas fa-heart" />
                    </span>
                    <div className="home-product-item__rating">
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <span className="home-product-item__sold">169 đã bán</span>
                  </div>
                  <div className="home-product-item__origin">
                    <span className="home-product-item__brand">Whoo</span>
                    <span className="home-product-item__origin-name">Nhật Bản</span>
                  </div>
                  <div className="home-product-item__favorite">
                    <i className="fas fa-check" />
                    <span>Yêu thích</span>
                  </div>
                  <div className="home-product-item__sale-off">
                    <span className="home-product-item__sale-off-percent">43%</span>
                    <span className="home-product-item__sale-off-label">GIẢM</span>
                  </div>
                </a>
              </div>
              <div className="col p-2-4 t-4 m-6">
                <a className="home-product-item" href="product.html">
                  <div className="home-product-item__img" style={{backgroundImage: 'url(https://cf.shopee.vn/file/847b2d121800874595e39ebdc9c6e39b_tn)'}} />
                  <h4 className="home-product-item__name">
                    Set nước hoa hồng Ohui Miracle Moisture Skin Softener Moist
                  </h4>
                  <div className="home-product-item__price">
                    <span className="home-product-item__price-old">1.200.000đ</span>
                    <span className="home-product-item__price-current">999.000đ</span>
                  </div>
                  <div className="home-product-item__action">
                    {/* Liked: home-product-item__like--liked */}
                    <span className="home-product-item__like home-product-item__like--liked">
                      <i className="home-product-item__like-icon-empty far fa-heart" />
                      <i className="home-product-item__like-icon-fill fas fa-heart" />
                    </span>
                    <div className="home-product-item__rating">
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <span className="home-product-item__sold">169 đã bán</span>
                  </div>
                  <div className="home-product-item__origin">
                    <span className="home-product-item__brand">Whoo</span>
                    <span className="home-product-item__origin-name">Nhật Bản</span>
                  </div>
                  <div className="home-product-item__favorite">
                    <i className="fas fa-check" />
                    <span>Yêu thích</span>
                  </div>
                  <div className="home-product-item__sale-off">
                    <span className="home-product-item__sale-off-percent">43%</span>
                    <span className="home-product-item__sale-off-label">GIẢM</span>
                  </div>
                </a>
              </div>
              <div className="col p-2-4 t-4 m-6">
                <a className="home-product-item" href="product.html">
                  <div className="home-product-item__img" style={{backgroundImage: 'url(https://cf.shopee.vn/file/90edda778e02f7bf14439fbed0de7cd4_tn)'}} />
                  <h4 className="home-product-item__name">
                    Set nước hoa hồng Ohui Miracle Moisture Skin Softener Moist
                  </h4>
                  <div className="home-product-item__price">
                    <span className="home-product-item__price-old">1.200.000đ</span>
                    <span className="home-product-item__price-current">999.000đ</span>
                  </div>
                  <div className="home-product-item__action">
                    {/* Liked: home-product-item__like--liked */}
                    <span className="home-product-item__like home-product-item__like--liked">
                      <i className="home-product-item__like-icon-empty far fa-heart" />
                      <i className="home-product-item__like-icon-fill fas fa-heart" />
                    </span>
                    <div className="home-product-item__rating">
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <span className="home-product-item__sold">169 đã bán</span>
                  </div>
                  <div className="home-product-item__origin">
                    <span className="home-product-item__brand">Whoo</span>
                    <span className="home-product-item__origin-name">Nhật Bản</span>
                  </div>
                  <div className="home-product-item__favorite">
                    <i className="fas fa-check" />
                    <span>Yêu thích</span>
                  </div>
                  <div className="home-product-item__sale-off">
                    <span className="home-product-item__sale-off-percent">43%</span>
                    <span className="home-product-item__sale-off-label">GIẢM</span>
                  </div>
                </a>
              </div>
              <div className="col p-2-4 t-4 m-6">
                <a className="home-product-item" href="product.html">
                  <div className="home-product-item__img" style={{backgroundImage: 'url(https://cf.shopee.vn/file/770ca15f3c28c165b3b7ce6fb3c5edda_tn)'}} />
                  <h4 className="home-product-item__name">
                    Set nước hoa hồng Ohui Miracle Moisture Skin Softener Moist
                  </h4>
                  <div className="home-product-item__price">
                    <span className="home-product-item__price-old">1.200.000đ</span>
                    <span className="home-product-item__price-current">999.000đ</span>
                  </div>
                  <div className="home-product-item__action">
                    {/* Liked: home-product-item__like--liked */}
                    <span className="home-product-item__like home-product-item__like--liked">
                      <i className="home-product-item__like-icon-empty far fa-heart" />
                      <i className="home-product-item__like-icon-fill fas fa-heart" />
                    </span>
                    <div className="home-product-item__rating">
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <span className="home-product-item__sold">169 đã bán</span>
                  </div>
                  <div className="home-product-item__origin">
                    <span className="home-product-item__brand">Whoo</span>
                    <span className="home-product-item__origin-name">Nhật Bản</span>
                  </div>
                  <div className="home-product-item__favorite">
                    <i className="fas fa-check" />
                    <span>Yêu thích</span>
                  </div>
                  <div className="home-product-item__sale-off">
                    <span className="home-product-item__sale-off-percent">43%</span>
                    <span className="home-product-item__sale-off-label">GIẢM</span>
                  </div>
                </a>
              </div>
              <div className="col p-2-4 t-4 m-6">
                <a className="home-product-item" href="product.html">
                  <div className="home-product-item__img" style={{backgroundImage: 'url(https://cf.shopee.vn/file/43b0dab404f27ced5ed2801ffc24edf2_tn)'}} />
                  <h4 className="home-product-item__name">
                    Set nước hoa hồng Ohui Miracle Moisture Skin Softener Moist
                  </h4>
                  <div className="home-product-item__price">
                    <span className="home-product-item__price-old">1.200.000đ</span>
                    <span className="home-product-item__price-current">999.000đ</span>
                  </div>
                  <div className="home-product-item__action">
                    {/* Liked: home-product-item__like--liked */}
                    <span className="home-product-item__like home-product-item__like--liked">
                      <i className="home-product-item__like-icon-empty far fa-heart" />
                      <i className="home-product-item__like-icon-fill fas fa-heart" />
                    </span>
                    <div className="home-product-item__rating">
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <span className="home-product-item__sold">169 đã bán</span>
                  </div>
                  <div className="home-product-item__origin">
                    <span className="home-product-item__brand">Whoo</span>
                    <span className="home-product-item__origin-name">Nhật Bản</span>
                  </div>
                  <div className="home-product-item__favorite">
                    <i className="fas fa-check" />
                    <span>Yêu thích</span>
                  </div>
                  <div className="home-product-item__sale-off">
                    <span className="home-product-item__sale-off-percent">43%</span>
                    <span className="home-product-item__sale-off-label">GIẢM</span>
                  </div>
                </a>
              </div>
              <div className="col p-2-4 t-4 m-6">
                <a className="home-product-item" href="product.html">
                  <div className="home-product-item__img" style={{backgroundImage: 'url(https://cf.shopee.vn/file/ca918af68755e7b10ea380987fc102c7_tn)'}} />
                  <h4 className="home-product-item__name">
                    Set nước hoa hồng Ohui Miracle Moisture Skin Softener Moist
                  </h4>
                  <div className="home-product-item__price">
                    <span className="home-product-item__price-old">1.200.000đ</span>
                    <span className="home-product-item__price-current">999.000đ</span>
                  </div>
                  <div className="home-product-item__action">
                    {/* Liked: home-product-item__like--liked */}
                    <span className="home-product-item__like home-product-item__like--liked">
                      <i className="home-product-item__like-icon-empty far fa-heart" />
                      <i className="home-product-item__like-icon-fill fas fa-heart" />
                    </span>
                    <div className="home-product-item__rating">
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <span className="home-product-item__sold">169 đã bán</span>
                  </div>
                  <div className="home-product-item__origin">
                    <span className="home-product-item__brand">Whoo</span>
                    <span className="home-product-item__origin-name">Nhật Bản</span>
                  </div>
                  <div className="home-product-item__favorite">
                    <i className="fas fa-check" />
                    <span>Yêu thích</span>
                  </div>
                  <div className="home-product-item__sale-off">
                    <span className="home-product-item__sale-off-percent">43%</span>
                    <span className="home-product-item__sale-off-label">GIẢM</span>
                  </div>
                </a>
              </div>
              <div className="col p-2-4 t-4 m-6">
                <a className="home-product-item" href="product.html">
                  <div className="home-product-item__img" style={{backgroundImage: 'url(https://cf.shopee.vn/file/2e98b7a2f7fc8b2845f6c8ecba91ac71_tn)'}} />
                  <h4 className="home-product-item__name">
                    Set nước hoa hồng Ohui Miracle Moisture Skin Softener Moist
                  </h4>
                  <div className="home-product-item__price">
                    <span className="home-product-item__price-old">1.200.000đ</span>
                    <span className="home-product-item__price-current">999.000đ</span>
                  </div>
                  <div className="home-product-item__action">
                    {/* Liked: home-product-item__like--liked */}
                    <span className="home-product-item__like home-product-item__like--liked">
                      <i className="home-product-item__like-icon-empty far fa-heart" />
                      <i className="home-product-item__like-icon-fill fas fa-heart" />
                    </span>
                    <div className="home-product-item__rating">
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="home-product-item__star--gold fas fa-star" />
                      <i className="fas fa-star" />
                    </div>
                    <span className="home-product-item__sold">169 đã bán</span>
                  </div>
                  <div className="home-product-item__origin">
                    <span className="home-product-item__brand">Whoo</span>
                    <span className="home-product-item__origin-name">Nhật Bản</span>
                  </div>
                  <div className="home-product-item__favorite">
                    <i className="fas fa-check" />
                    <span>Yêu thích</span>
                  </div>
                  <div className="home-product-item__sale-off">
                    <span className="home-product-item__sale-off-percent">43%</span>
                    <span className="home-product-item__sale-off-label">GIẢM</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <ul className="pagination pagination__home-product">
            <li className="pagination-item">
              <a href="#" className="pagination-item__link">
                <i className="pagination-item__icon fas fa-angle-left" />
              </a>
            </li>
            <li className="pagination-item pagination-item--active">
              <a href="#" className="pagination-item__link">
                1
              </a>
            </li>
            <li className="pagination-item">
              <a href="#" className="pagination-item__link">
                2
              </a>
            </li>
            <li className="pagination-item">
              <a href="#" className="pagination-item__link">
                3
              </a>
            </li>
            <li className="pagination-item">
              <a href="#" className="pagination-item__link">
                4
              </a>
            </li>
            <li className="pagination-item">
              <a href="#" className="pagination-item__link">
                5
              </a>
            </li>
            <li className="pagination-item">
              <span className="pagination-item__link">
                ...
              </span>
            </li>
            <li className="pagination-item">
              <a href="#" className="pagination-item__link">
                14
              </a>
            </li>
            <li className="pagination-item">
              <a href="#" className="pagination-item__link">
                <i className="pagination-item__icon fas fa-angle-right" />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
  <footer className="footer">
    <div className="grid wide fix-wide-on-tablet footer-size">
      {/* Footer list */}
      <div className="row">
        <div className="col p-2-4 t-4 m-6">
          <h3 className="footer__heading">Chăm sóc khách hàng</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <a href="#" className="footer-item__link">Trung tâm trợ giúp</a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-item__link">MH-Shop Mail</a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-item__link">Hướng dẫn mua hàng</a>
            </li>
          </ul>
        </div>
        <div className="col p-2-4 t-4 m-6">
          <h3 className="footer__heading">Giới thiệu</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <a href="#" className="footer-item__link">Giới thiệu</a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-item__link">Tuyển dụng</a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-item__link">Điều khoản</a>
            </li>
          </ul>
        </div>
        <div className="col p-2-4 t-4 m-6 ">
          <h3 className="footer__heading">Danh mục</h3>
          <ul className="footer-list-1">
            <li className="footer-item">
              <a href="#" className="footer-item__link">Trang phục nữ</a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-item__link">Mĩ phẫm nam giới</a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-item__link">Mĩ phẫm nữ giới</a>
            </li>
          </ul>
        </div>
        <div className="col p-2-4 t-4 m-6">
          <h3 className="footer__heading">Theo dõi</h3>
          <ul className="footer-list">
            <li className="footer-item">
              <a href="#" className="footer-item__link">
                <i className="footer-item__icon fab fa-facebook" />
                Facebook
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-item__link">
                <i className="footer-item__icon fab fa-instagram" />
                Instagram
              </a>
            </li>
            <li className="footer-item">
              <a href="#" className="footer-item__link">
                <i className="footer-item__icon fab fa-linkedin" />
                Linkedin
              </a>
            </li>
          </ul>
        </div>
        <div className="col p-2-4 t-8 m-12">
          <h3 className="footer__heading">Vào cửa hàng trên ứng dụng</h3>
          <div className="footer__download">
            <img src="assets/img/qr_code.png" alt="Download QR" className="footer__download-qr" />
            <div className="footer__download-apps">
              <a href="#" className="footer__download-app-link">
                <img src="assets/img/app_store.png" alt="Google Play" className="footer__download-app-img" />
              </a>
              <a href="#" className="footer__download-app-link">
                <img src="assets/img/google_play.png" alt="App Store" className="footer__download-app-img" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Footer copyright */}
    <div className="footer__bottom">
      <div className="grid wide fix-wide-on-tablet">
        <p className="footer__copyright-text">© 2021 - Bản quyền thuộc về Công ty MH</p>
      </div>
    </div>
  </footer>
</div>

    );
}
export default Basepage;