# Raspberry Pi Commands

This document describes several commonly used commands.

## Table of Contents

* [Command List](#command-list)
  * [General Commands](#general-commands)  
  * [File and Directory Commands](#file-and-directory-commands)  
  * [Networking and Internet Commands](#networking-and-internet-commands)  
  * [System Information Commands](#system-information-commands)  
  * [Disk Management Commands](#disk-management-commands)  
  * [Permission Commands](#permission-commands)
* [References](#references)

## Command List

There are two user "modes" you can work with in Linux. One is a user mode with basic access privileges, and the other is a mode with administrator access privileges (AKA super user, or root). Some tasks can't be performed with basic privileges, so you will need to enter them with super user privileges to perform them. You'll frequently see the prefix `sudo` before commands, which means you’re telling the computer to run the command with super user privileges.

An alternative to entering `sudo` before each command is to access the root command prompt, which runs every command with super user privileges. You can access root mode by entering `sudo su` at the command prompt. After entering `sudo su`, you'll see the `root@raspberrypi:/home/pi#` command prompt, and all subsequent commands will have super user privileges.

Most of the commands below have a lot of other useful options that I don't mention. To see a list of all the other available options for a command, enter the command, followed by `––help`.


### General Commands

`apt-get update`: Synchronizes the list of packages on your system to the list in the repositories. Use it before installing new packages to make sure you are installing the latest version.

`apt-get upgrade`: Upgrades all of the software packages you have installed.

`clear`: Clears previously run commands and text from the terminal screen.

`date`: Prints the current date.

`find / -name example.txt`: Searches the whole system for the file example.txt and outputs a list of all directories that contain the file.

`vi example.txt`: Opens the file example.txt in the Linux text editor VI. ([VI Cheat Sheet](http://www.lagmonster.org/docs/vi.html))

`poweroff`: To shutdown immediately.

`raspi-config`: Opens the configuration settings menu.

`reboot`: To reboot immediately.

`shutdown -h now`: To shutdown immediately.

`shutdown -h 01:22`: To shutdown at 1:22 AM.

`startx`: Opens the GUI (Graphical User Interface) if installed. Won't work for Lite version.


### File and Directory Commands

`cat example.txt`: Displays the contents of the file example.txt.

`cd /abc/xyz`: Changes the current directory to the /abc/xyz directory.

`cp XXX`: Copies the file or directory XXX and pastes it to a specified location; i.e. `cp examplefile.txt /home/pi/office/` copies examplefile.txt in the current directory and pastes it into the /home/pi/ directory. If the file is not in the current directory, add the path of the file's location (i.e. `cp /home/pi/documents/examplefile.txt /home/pi/office/` copies the file from the documents directory to the office directory).

`ls -l`: Lists files in the current directory, along with file size, date modified, and permissions.

`mkdir example_directory`: Creates a new directory named example_directory inside the current directory.

`mv XXX`: Moves the file or directory named XXX to a specified location. For example, `mv examplefile.txt /home/pi/office/` moves examplefile.txt in the current directory to the /home/pi/office directory. If the file is not in the current directory, add the path of the file’s location (i.e. `cp /home/pi/documents/examplefile.txt /home/pi/office/` moves the file from the documents directory to the office directory). This command can also be used to rename files (but only within the same directory). For example, `mv examplefile.txt newfile.txt` renames examplefile.txt to newfile.txt, and keeps it in the same directory.

`rm example.txt`: Deletes the file example.txt.

`rmdir example_directory`: Deletes the directory example_directory (only if it is empty).

`scp user@10.0.0.32:/some/path/file.txt`: Copies a file over SSH. Can be used to download a file from a PC to the Raspberry Pi. user@10.0.0.32 is the username and local IP address of the PC, and /some/path/file.txt is the path and file name of the file on the PC.

`touch example.txt`: Creates a new, empty file named example.txt in the current directory.


### Networking and Internet Commands

`ifconfig`: To check the status of the wireless connection you are using  (to see if wlan0 has acquired an IP address).

`iwconfig`: To check which network the wireless adapter is using.

`iwlist wlan0 scan`: Prints a list of the currently available wireless networks.

`iwlist wlan0 scan | grep ESSID`: Use grep along with the name of a field to list only the fields you need (for example to just list the ESSIDs).

`nmap`: Scans your network and lists connected devices, port number, protocol, state (open or closed) operating system, MAC addresses, and other information.

`ping`: Tests connectivity between two devices connected on a network. For example, `ping 10.0.0.32` will send a packet to the device at IP 10.0.0.32 and wait for a response. It also works with website addresses.

`wget http://www.website.com/example.txt`: Downloads the file example.txt from the web and saves it to the current directory.


### System Information Commands

`cat /proc/meminfo`: Shows details about your memory.

`cat /proc/partitions`: Shows the size and number of partitions on your SD card or hard drive.

`cat /proc/version`: Shows you which version of the Raspberry Pi you are using.

`df -h`: Shows information about the available disk space.

`df /`: Shows how much free disk space is available.

`dpkg – –get–selections | grep XXX`: Shows all of the installed packages that are related to XXX.

`dpkg – –get–selections`: Shows all of your installed packages.

`free`: Shows how much free memory is available.

`hostname -I`: Shows the IP address of your Raspberry Pi.

`lsusb`: Lists USB hardware connected to your Raspberry Pi.

UP key: Pressing the UP key will print the last command entered into the command prompt. This is a quick way to repeat previous commands or make corrections to commands.

`vcgencmd measure_temp`: Shows the temperature of the CPU.

`vcgencmd get_mem arm && vcgencmd get_mem gpu`: Shows the memory split between the CPU and GPU.


### Disk Management Commands

To mount a USB drive:
```
sudo mkdir /mnt/usbdrive
sudo mount /dev/sda1 /mnt/usbdrive
ls /mnt/usbdrive
```

To list your file systems:
```
sudo fdisk -l
sudo mount -l
df -h
```

Before disconnecting a USB drive:
```
sudo umount /dev/sda1
```

Format a drive to Linux EXT4
```
sudo mkfs.ext4 /dev/sda1 -L untitled
```

Add Apple OS X HFS+ read/write support
```
sudo apt-get install hfsutils hfsprogs hfsutils
```

Format a drive to HFS+
```
sudo mkfs.hfsplus /dev/sda1 -v untitled
```

Add Windows NTFS read/write support
```
sudo apt-get install ntfs-3g
```

Format a drive to NTFS
```
sudo mkfs.ntfs /dev/sda1 -f -v -I -L untitled
```

Add Windows/DOS FAT32 read/write support
```
sudo apt-get install dosfstools
```

Format a drive to FAT32
```
sudo mkfs.vfat /dev/sda1 -n untitled
```

### Permission Commands

`ls -l`: Lists files with permissions

`chmod`: Changes file permissions

`chown`: Changes the file owner

`groups`: Checks the users in a group

`useradd`: Adds a user to a group

`chgrp`: Changes the file group


## Moving Files

### [cyberduck](https://cyberduck.io/)

To copy files to/from a device:

* Use the SFTP (SSH protocol)
* address: 192.168.x.x or 10.1.x.x
* user: pi
* pass: raspberry

### sftp

To copy files to/from a device:
```
$ sftp pi@ip-address
Enter password (raspberry)
```

* Use `put` to transfer a file.
* Use `put -r` to transfer whole directory to /home/pi/myfolder. Note you need to make the target location on the device before copying files over.

```
sftp> put -r myfolder
```

### scp

Open the terminal and use the following commands to move files and folders from place to place.

* `~` or `~/` or `/home/pi` is the root directory
* `pi` is the default user name

**Local Machine --> Raspberry Pi**

Copy a file from local machine to Raspberry Pi:
```
scp file.txt pi@ip-address:~
```

Copy a folder from local machine to Raspberry Pi:
```
scp -r my-folder pi@ip-address:~
```

**Raspberry Pi --> Local Machine**

Copy a file from Raspberry Pi to local machine:
```
sudo scp pi@ip-address:file.txt ~/Desktop/file.txt
```

Copy a folder from Raspberry Pi to local machine:
```
sudo scp -r pi@ip-address:folder ~/Desktop/folder
```

**Raspberry Pi --> Raspberry Pi**

Copy file from Raspberry Pi 1 (SSH logged into) to Raspberry Pi 2:
```
$ scp test.txt pi@ip-address:~
```

## References

* [42 of the Most Useful Raspberry Pi Commands](http://www.circuitbasics.com/useful-raspberry-pi-commands/)
* [Cheat Sheet - USB drives (Working with Disks)](https://www.raspberrypi.org/forums/viewtopic.php?t=38429)
* [Use USB hard disk & flash drives with your Raspberry Pi](https://devtidbits.com/2013/03/21/using-usb-external-hard-disk-flash-drives-with-to-your-raspberry-pi/)
* [Linux sftp command](https://www.computerhope.com/unix/sftp.htm)
* [Example syntax for Secure Copy (scp)](http://www.hypexr.org/linux_scp_help.php)
* [Working With File Permissions on Your Raspberry Pi](http://www.dummies.com/computers/raspberry-pi/working-with-file-permissions-on-your-raspberry-pi/)
* [VI Cheat Sheet](http://www.lagmonster.org/docs/vi.html)
