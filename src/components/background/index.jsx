import {useTranslation} from "react-i18next";
import {useState} from "react";
import {isIos} from "../../hooks/web-setting.js";

const Background = ({setQrCodeVisible ,setRegisterModelVisible,appDownLoadWeb}) =>{
  const { t, i18n } = useTranslation();
  const {language} = i18n


  const goWeb = () =>{
    window.open('https://www.Lottery9.com')
  }

  const goCustomer = () =>{
    window.open('https://t.me/ZoeLottery9')
  }

  const goAppDownLoad = () =>{
    if(isIos){
      window.open(appDownLoadWeb.iosAppDownloadUrl)
    }else{
      window.open(appDownLoadWeb.androidAppDownloadUrl)
    }
  }




  return <div className={'w-full bg-[#181B21] '}>
    <div className={'w-full  relative  max-w-[375px] mx-auto '}>
      <div className={'relative w-full'}>
        <img src={`/images/${language}/img01.png`} className={'w-full h-auto mb-[-1px]'} alt="" draggable="false"/>
        <LangButton/>
       <div className={'z-1 absolute w-full pb-[20%] translate-y-[-100%] overflow-hidden'}>
         <div className={'absolute bottom-0 h-full cursor-pointer transition-all hover:scale-105 active:scale-95'}
         style={{left: language === "CN" ? '1.86%' : language === "TL" ?'-1%': '0'}} onClick={()=>setRegisterModelVisible(true)}>
           <img src={`/images/${language}/btn_registeranchor.png`} className={'h-full w-auto '} alt="" draggable="false"/>
         </div>
         <div className={'absolute bottom-0 h-full cursor-pointer transition-all hover:scale-105 active:scale-95'}
              style={{right: language === "CN" ? '1.86%' : language === "TL" ?'-1%': '0'}} onClick={goAppDownLoad}>
           <img src={`/images/${language}/btn_download.png`} className={'h-full w-auto '} alt="" draggable="false"/>
         </div>
       </div>
      </div>
      <img src={`/images/${language}/img02.png`} className={'w-full h-auto mb-[-1px]'} alt="" draggable="false"/>
      <img src={`/images/${language}/img03.png`} className={'w-full h-auto mb-[-1px]'} alt="" draggable="false"/>
      <img src={`/images/${language}/img04.png`} className={'w-full h-auto mb-[-1px]'} alt="" draggable="false"/>

      <div className={'fixed bottom-[-1px] w-full max-w-[375px]'}>
        <div className={'absolute bottom-0 translate-y-[-125px] right-[8px] w-[60px]  h-auto cursor-pointer transition-all hover:scale-105 active:scale-95'}>
          <img src={`/images/common/btn_customer.png`} className={'h-full w-full'} alt="" draggable="false" onClick={goCustomer}/>
        </div>
        <div className={'absolute bottom-0 translate-y-[-59px] right-[8px] w-[60px] h-auto cursor-pointer transition-all hover:scale-105 active:scale-95'} onClick={()=>setQrCodeVisible(true)}>
          <img src={`/images/common/btn_qrcode.png`} className={'h-full w-full '} alt="" draggable="false" />
        </div>

        <div className={'relative w-full'}>
          <img src={`/images/common/img_footer_bg.png`} className={'w-full h-auto '} alt="" draggable="false"/>
          <div className={'absolute bottom-0 left-0 w-full h-[95%]  flex items-center justify-center '} >
            <div className={'w-[28px]  mr-[6px] cursor-pointer'} onClick={goWeb}>
              <img src={`/images/common/img_footer_logo.png`} className={'h-auto w-full'} alt="" draggable="false"/>
            </div>
            <div className={'cursor-pointer font-bold text-[#333333] mr-[16px] text-[14px] leading-[17px]'} onClick={goWeb}>
              www.Lottery9.com
            </div>

            <div className={'w-[28px]  mr-[6px] cursor-pointer'} onClick={goCustomer}>
              <img src={`/images/common/img_footer_telegram.png`} className={'h-auto w-full'} alt="" draggable="false"/>
            </div>
            <div className={'cursor-pointer font-bold text-[#333333] text-[14px] leading-[17px]'} onClick={goCustomer}>
              ZoeLottery9


            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
}

const LangButton = () =>{
  const { t, i18n } = useTranslation();
  const {language} = i18n
  const langList = [
    {lang:'CN', value:'zh_CN'},
    {lang:'EN', value:'en_US'},
    {lang:'TL', value:'tl_PH'}

  ]

  const changeLang = (lang, value) =>{
    i18n.changeLanguage(lang);
    sessionStorage.setItem('local',lang)
    sessionStorage.setItem('language', value)
    location.reload()
  }
  return(
    <div
      className={'absolute flex gap-2 items-center justify-center z-1  right-[5.3%] top-[2.6%] '}>
      {langList.map((e) => (
        <div
          className={`${language === e.lang ? ' py-[5px] px-[11px]' :' py-[6px] px-[12px]'}  rounded-full overflow-visible`}
          style={{
            background: language === e.lang ? 'linear-gradient(135deg, #FF724E, #FF3A9A)' : 'rgba(255, 255, 255, 0.8)',
            border:  language === e.lang ? '2px #FFFFFF solid': '',

          }}
        >
          <div
            className={'w-full text-center  font-bold  text-[12px] leading-[14.5px] transition-all hover:scale-105 active:scale-95 cursor-pointer'}
            style={{ color: language === e.lang ? '#FFFFFF' : '#9D9D9D' }}
            onClick={() => changeLang(e.lang, e.value)}
          >
            {e.lang}
          </div>

        </div>
      ))}

    </div>

  )
}

export { Background }
