const photoChange = document.getElementById('setTimeImage');

const defaultImg = new Array();

defaultImg[0] = document.getElementById('Img_a');
defaultImg[1] = document.getElementById('Img_b');
defaultImg[2] = document.getElementById('Img_c');
defaultImg[3] = document.getElementById('Img_d');

const middlePhoneImg = new Array();

middlePhoneImg[0] = "https://cdn.upbit.com/images/slider1.1089917.png"
middlePhoneImg[1] = "https://cdn.upbit.com/images/slider2.3fd8f8f.png";
middlePhoneImg[2] = "https://cdn.upbit.com/images/slider3.1a7fdd2.png";
middlePhoneImg[3] = "https://cdn.upbit.com/images/slider4.bdf9d81.png";

const sideImg = new Array();

sideImg[0] = 'https://cdn.upbit.com/images/sliderbt01.825c989.png';
sideImg[1] = 'https://cdn.upbit.com/images/sliderbt02.ac7c361.png';
sideImg[2] = 'https://cdn.upbit.com/images/sliderbt03.a998e6c.png';
sideImg[3] = 'https://cdn.upbit.com/images/sliderbt04.7390773.png';

let count = 0;

const setIntervalImage = () => {
  if (count > 3)
    count = 0;

  for (let i = 0; i < 4; i++) {
    defaultImg[i].src = 'https://cdn.upbit.com/images/sliderbt.d85db79.png';
  }
  const setImage = (ImgIndex) => {
    defaultImg[ImgIndex].src = sideImg[ImgIndex];
    photoChange.src = middlePhoneImg[ImgIndex];
  } 

  setImage(count);
}

setIntervalImage();

const intervalFunc = () => {
  count += 1;
  setIntervalImage();
}

let intervalId = setInterval(intervalFunc, 1500);

const onClickImage = (clickCount) => {
  clearInterval(intervalId);
  count = clickCount;
  setIntervalImage();
  intervalId = setInterval(intervalFunc, 1500);
}