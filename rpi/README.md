# Raspberry Pi

This guide walks through the process of setting up a Raspberry Pi and installing Node.js. It also includes information about backing up SD cards and tips and tricks to constructing a solid system for rapid prototyping with hardware.

_Note: this is a living document and will be updated often. In time this document will contain additional setup options for different devices, recommended packages, and steps to setup a system for prototyping with additional hardware._

At the time of this writing **Raspbian Stretch** and **Node v8.10.0** are the latest versions.

## Table of Contents

* [Devices](#devices)
  * [Raspberry Pi 3 (Model B)](#raspberry-pi-3-model-b)  
  * [Raspberry Pi Zero W](#raspberry-pi-zero-w)
  * [Raspberry Pi Zero](#raspberry-pi-zero)
* [Device Setup](#device-setup)
* [Node.js](#nodejs)
  * [How to Install Node.js](#how-to-install-nodejs)
  * [How to Uninstall Node.js](#how-to-uninstall-nodejs)
* [Install Git](#install-git)
* [How to Backup SD Cards](#how-to-backup-sd-cards)
* [How to Email Device IP Address](#how-to-email-device-ip-address)
* [References](#references)    

## Devices

### Raspberry Pi 3 (Model B)

[Raspberry Pi 3 Model B](https://www.raspberrypi.org/products/raspberry-pi-3-model-b/)

The Raspberry Pi 3 is the third-generation Raspberry Pi. It replaced the Raspberry Pi 2 Model B in February 2016.

* A 1.2GHz Broadcom BCM2837 64-bit quad-core ARMv8 CPU
* 802.11n Wireless LAN
* Bluetooth 4.1
* Bluetooth Low Energy (BLE)
* 1GB RAM
* 4 USB 2 ports
* 40 GPIO pins
* Full HDMI port
* Ethernet port
* Combined 3.5mm audio jack and composite video
* Camera interface (CSI)
* Display interface (DSI)
* Micro SD card slot (now push-pull rather than push-push)
* VideoCore IV 3D graphics core

### Raspberry Pi Zero W

[Raspberry Pi Zero W](https://www.raspberrypi.org/products/raspberry-pi-zero-w/)

The Raspberry Pi Zero W extends the Pi Zero family. Launched at the end of February 2017, the Pi Zero W has all the functionality of the original Pi Zero, but comes with with added connectivity for Bluetooth and Wifi.

* 1GHz, single-core CPU
* 512MB RAM
* 802.11 b/g/n wireless LAN
* Bluetooth 4.1
* Bluetooth Low Energy (BLE)
* Mini HDMI and USB On-The-Go ports
* Micro USB power
* HAT-compatible 40-pin header
* Composite video and reset headers
* CSI camera connector

### Raspberry Pi Zero

[Raspberry Pi Zero](https://www.raspberrypi.org/products/raspberry-pi-zero/)

The Raspberry Pi Zero is half the size of a Model A+, with twice the utility. A tiny Raspberry Pi that’s affordable enough for any project!

* 1GHz single-core CPU
* 512MB RAM
* Mini HDMI port
* Micro USB OTG port
* Micro USB power
* HAT-compatible 40-pin header
* Composite video and reset headers
* CSI camera connector (v1.3 only)

## Device Setup

1. Download and Install Raspbian (Lite)
    
    The first part of the setup process consists of downloading a disk image of the entire operating system and copying it to the microSD card. There are two versions of the OS: Raspbian w/ Desktop and Raspbian Lite. The lite version will not have a familiar desktop interface. It will be the base OS with a command line interface.
    
    **[Download Rasbian (Stretch Lite)](https://www.raspberrypi.org/downloads/raspbian/)**        
        
    What's a microSD card?

    Its a really small SD card. They are commonly used in mobile phones and other small embedded systems. Think about it like a really tiny hard drive used. The purpose of the microSD card in this case is to run the OS and act as the storage device. There are a few ways to do this outlined in the [documentation](https://www.raspberrypi.org/documentation/installation/installing-images/mac.md). I will describe two ways to do this. Both methods have the same end result.

    **Option 1: Etcher (Beginner)**
  
    * Download and install [Etcher](https://etcher.io). It makes writing disk images to a SD card very easy.
    * Unzip the Raspbian disk image to extract the .img file. Etcher works with either file.
    * Insert your microSD card into your SD card slot. If your computer doesn't have a SD card slot you will need to get a dongle to flash the card.
    * Open Etcher and point to the zip or img file, your microSD card
    * Click Flash and wait for a few mins for the process to finish. The speed at which it flashes the card will depend on the transfer rate of your card.
    * Enter system password when prompted
    * Eject Drive (Etcher does this automatically)
    
    **Option 2: Command Line (Advanced)**
    
    * Insert your microSD card into your SD card slot. If your computer doesn't have a SD card slot you will need to get a dongle to flash the card.
    * Open Terminal    
    * Type `diskutil list` to see a list of all the disks available. Pay special attention to the _disk#_ shown under IDENTIFIER in the list of drives. You need to make sure you are working with the correct disk. Otherwise, you can cause damage and lose data. Be cautious and understand the command you are entering. Especially if you are doing anything with `sudo` aka super user privileges. Look at the [documentation](https://www.raspberrypi.org/documentation/installation/installing-images/mac.md) for more info.    
      ```   
      diskutil list
      diskutil unmountDisk /dev/disk1
      sudo dd bs=1m if=Downloads/2018-03-13-raspbian-stretch-lite.img of=/dev/rdisk1
      ```
    * Enter system password when prompted
    * Wait for some amount of time (~ 5-7 mins). The cursor will flash and return back to a mode where you can enter commands when complete.
    * Eject Drive

    After flashing the microSD card, put it into the small slot on the side of the board and connect all the peripherals (display, keyboard, power, ethernet). When you plugin the power the board will turn on. Do this last since you want to see the boot up process on the screen.
  
    After the system boots up you should see a prompt for login and password.  
    * Default Login: _pi_
    * Default Password: _raspberry_
    
    At this point your device is ready to be configured. Congratulations!
  
2. Configure System (localization, timezone, keyboard, etc)
  
    The first thing to do is configure some basic system settings. This same menu is where you can change the user password and setup other kinds of options for booting, network and more.
  
    ```
    sudo raspi-config
    ```
    * Advanced Options > Expand Filesystem
      * Expanding the file system ensures that all of the SD card storage is available to Raspbian (the OS).
      * Reboot the device, login, and enter the config settings again (blue screen).
    * Localisation Options
      * Change locale – Hit Enter (the screen will momentarily blip to black before returning to Raspi-config)
      * Arrow down to "en_US.UTF-8 UTF-8".
      * Press the spacebar to put a * in the brackets [].
      * Hit the tab key and then hit the Enter key to select <Ok>.
      * (Another screen appears.) Select "en_US.UTF8" as the default locale.
      * Hit the tab key and then hit the enter key to select <Ok>.
      * (The system will generate the new locales and then bring you back to the main menu.)
    * Localisation Options
      * Change Timezone – Hit Enter
      * Select your geographic area (US in my case)
      * Select your specific time zone (Mountain in my case)
      * Hit the tab key and then hit the enter key to select <Ok>.
    * Localisation Options
      * Change Keyboard Layout – Hit Enter
      * Change keyboard if needed.  Here’s the changes I made:
      * Select Generic 105 keyboard (Intl)
        * Select Other
        * Select English (US)
        * Key to function as AltGr (I chose the default for the keyboard layout.)
        * Compose key – No compose key    
    
    **Raspberry Pi 3:**
    
    Goto Finish when done to return to the terminal. Next, you want to configure Wifi so you can connect to the internet. If you are already using an ethernet cable then you should have an IP address already. Type `ifconfig` and look for inet under eth0. There should be an IP address shown. Depending on the router configuration it may be something like 192.168.0.xx or 10.1.10.xx. This is your IP address for a wired connection. Not Wifi.
    
    **Raspberry Pi Zero:**
    
    Goto Finish when done to return to the terminal. Next, you want to configure Wifi so you can connect to the internet. The device doesn't include Wifi so you need an ethernet dongle or Wifi USB adapter. Plug in the adapter at this time to connect to the internet after you configure the Wifi connection in the next step.

3. Configure WiFi (and get IP address)

    Edit the wpa_supplicant.conf file to include a network definition.
    ```
    sudo vi /etc/wpa_supplicant/wpa_supplicant.conf
    ```
    Added to bottom of file:
    ```
    ...
    network={
        ssid="STUDIO-2.4"
        psk="password"
    }
    ```
    
    Reboot for the Wifi settings to take effect.

    Print out the network settings for wlan0 (Wifi device)
    ```
    ifconfig wlan0
    ```
    
    You should now have an IP address. It will show up just above the login prompt after rebooting the device. With this you can now ssh into the device from another terminal. You no longer need a USB keyboard or display to work with the device.
    
4. SSH Into Device (Optional)

    SSH is disabled by default and needs to be enabled in order to work. To do this go to the system configuration via `sudo raspi-config` and navigate to the Interfacing Options menu item. Enable SSH (2nd item in menu). After doing this save and exit the config menu to return to the terminal prompt.
    
    This step is optional and depends on your application and preference. If you don't want to toggle between two different keyboards and have the Raspberry Pi plugged into a separate display with keyboard to use it, then just ssh into it via Terminal. You can have multiple terminal windows open or use tabs or use `screen`.
    ```
    ssh pi@ip-address
    user: pi
    pass: raspberry
    ```
    **After logging into your device you will see a message suggesting you to change the username and password to make it more secure. I recommend doing this later once you get the hang of working with the device. For the moment it's not a big issue.**
    
    You may be asked if you want to approve the "authenticity of host". Enter "yes" and Enter. This will add a line item to your ~/.ssh/known_hosts file. To view this you can enter `cat ~/.ssh/known_hosts`. You will see the IP address of your device as the last (most recent) thing added to the bottom of the file. This essentially allows your computer to trust the connection to the device.

5. Apply Raspbian (OS) Updates

    This can take awhile depending on your internet connection and if you are using wifi or a cable. The size and speed of your SD card and the version of Raspberry Pi (1, 3, Zero, etc) can also be a factor.
    ```
    sudo apt-get update
    sudo apt-get dist-upgrade
    ```
    
    At this point you have a basic foundation to begin customizing for any application.

## Node.js

### How to Install Node.js
  
Node.js will run on various Raspberry Pi editions as long as there is a binary for it that matches the processor. In the case of the Raspberry Pi 3 Model B, both armv6 and armv7 binaries will work but armv8 (aka arm64) does not even though the device specs state "1.2GHz 64-bit quad-core ARMv8 CPU". In the case of the Raspberry Pi Zero only the armv6 will work. [This post](https://raspberrypi.stackexchange.com/questions/45319/install-newer-node-version-on-pi-3) on stackexchange goes into some detail about the different processors and what works.

_I suspect armv8 will work on the new edition (Raspberry Pi 3 model B+) of the device but have not tested it yet._

To install, locate an ARM version that will work from [Node.js Downloads](https://nodejs.org/en/download/). Look for the Linux Binaries (ARM) and right click on ARMv6 or ARMv7 to copy the link address. You will need the URL in the next command.

Commands Used

* `wget` - This downloads the file from the URL specified
* `tar` - This unzips an archive of file type .tar.xz
* `cd` - Change into the unzipped directory

**Raspberry Pi 3**

```
wget https://nodejs.org/dist/v8.10.0/node-v8.10.0-linux-armv7l.tar.xz
tar -xvf node-v8.10.0-linux-armv7l.tar.xz
cd node-v8.10.0-linux-armv7l
```

**Raspberry Pi Zero W**

```
wget https://nodejs.org/dist/v8.10.0/node-v8.10.0-linux-armv6l.tar.xz
tar node-v8.10.0-linux-armv6l.tar.xz
cd node-v8.10.0-linux-armv6l
```

**Raspberry Pi Zero**

```
wget https://nodejs.org/dist/v8.10.0/node-v8.10.0-linux-armv6l.tar.xz
tar node-v8.10.0-linux-armv6l.tar.xz
cd node-v8.10.0-linux-armv6l
```

Install Node:
```
sudo cp -R * /usr/local/
```

Verify Installation:
```
node -v
npm -v
```

At this point you have node and npm installed. Possible next steps, install git, install npm modules, hook up hardware peripherals, etc. The sky is the limit.

### How to Uninstall Node.js

Remove all these files from the system. To locate the node executable on the system type `which node`. It will likely return the location `/usr/local/bin`.

```
sudo rm -rf /usr/local/lib/node_modules
sudo rm -rf /usr/local/bin/node
sudo rm -rf /usr/local/bin/npm
sudo rm -rf /usr/local/bin/npx
sudo rm -rf /usr/local/include/node
sudo rm -rf /usr/local/share/doc/node
sudo rm -rf /usr/local/share/systemtap/tapset/node.stp
sudo rm -rf ~/.npm
```

You can verify node is no longer available if you try to type in `node -v`. It will no longer return a version number.

## Install Git

Installing Git is relatively straightforward. Make sure you check for any updates to packages first. This is common when installing any new software.

First update package list:
```
sudo apt-get update
```

Upgrade packages installed:
```
sudo apt-get dist-upgrade
```

Install git:
```
sudo apt-get install git
```

Check version:
```
git --version
```
        
## How to Backup SD Cards

It can be very useful to make backups of SD cards for a number of reasons. The obvious one being that if and when your card fails, you can make a new card that is identical. Another reason is that you may not want to configure a new system from scratch every time you start a project. If you have backups of a basic system setup, you can quickly get to building vs spending time configuring a new system from the ground up.

To do this you can make use of rdisk and Etcher. Why dd rdisk# instead of dd as suggested by the [Raspberry Pi Documentation](https://www.raspberrypi.org/documentation/linux/filesystem/backup.md)? Well, dd is very slow when using the disk# option and rdisk# is much faster. It provides more direct access to the card itself. [This superuser discussion](https://superuser.com/questions/631592/why-is-dev-rdisk-about-20-times-faster-than-dev-disk-in-mac-os-x) provides more information about why this is the case.

To make a backup of an SD card:

1. Insert a SD card into the computer
2. Open Terminal
3. Look at the list of disks using `diskutil list`. Identity the disk that matches your card. You can tell by looking at the size. Make a note of the disk#.
4. Enter the following command to make a backup using dd rdisk. Make sure to enter an output file path that has enough storage space to cover the size of the SD card (ie. If its a 16GB card you need at least 16GB of storage space to save an image to).
    ```
    sudo dd bs=1m if=/dev/rdisk# of=~/raspbian.img
    ```
5. Wait anywhere from 6-10 mins, maybe longer for larger cards, until the process completes. If you want to see the progress you can enter "ctrl + t". It will print out how much data has been copied in Bytes. Use a [Bytes to GB](https://www.google.com/search?q=bytes+to+gb&oq=byte&aqs=chrome.1.69i57j69i59.1614j0j1&sourceid=chrome&ie=UTF-8) conversion tool to see in GB.
6. When complete eject the source SD card.

To restore an image:

1. Insert a SD card into the computer
2. Open [Etcher](https://etcher.io)
3. Choose the source image you made a backup of
4. Choose the SD card as the destination
5. Click Flash and wait for a few mins
6. Eject card (This will happen automatically)

At this point, you should be able to boot up the flashed card in a similar device. Meaning, if you made an image for a Raspberry Pi 3 device you can run the restored image in the same kind of device. While it does need the be the same model, it doesn't necessarily need to be the exact same device the original card was configured from.

## How to Email Device IP Address

Coming Soon

## References

* [Beginners Guide to Installing Node.js on a Raspberry Pi](http://thisdavej.com/beginners-guide-to-installing-node-js-on-a-raspberry-pi/)
* [Setting Up Wifi Via the Command Line](https://www.raspberrypi.org/documentation/configuration/wireless/wireless-cli.md)
* [VI Cheat Sheet](http://www.lagmonster.org/docs/vi.html)
* [Installing Node.js on a Raspberry Pi 3](https://blog.wia.io/installing-node-js-on-a-raspberry-pi-3)
* [Node.js Downloads](https://nodejs.org/en/download/)
* [Install Newer Node Version on Pi 3](http://raspberrypi.stackexchange.com/questions/45319/install-newer-node-version-on-pi-3)
* [Updating and Upgrading Raspbian](https://www.raspberrypi.org/documentation/raspbian/updating.md)



