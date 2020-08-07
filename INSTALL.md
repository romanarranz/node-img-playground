## INSTALL

### OpenCV https://docs.opencv.org/2.4/doc/tutorials/introduction/linux_install/linux_install.html

```
sudo apt install build-essential
sudo apt install cmake git libgtk2.0-dev pkg-config libavcodec-dev libavformat-dev libswscale-dev
cd /tmp
git clone http://github.com/opencv/opencv
cd ~/opencv
mkdir release
cd release
cmake -D CMAKE_BUILD_TYPE=RELEASE -D CMAKE_INSTALL_PREFIX=/usr/local ..
```

### NodeJS

```
npm i
```