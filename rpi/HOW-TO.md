# Raspberry Pi How Tos

This guide provides various tips and tricks.

_Note: this is a living document and will be updated often.._

## Table of Contents

* [How to Locate a Device on the Local Network](#how-to-locate-a-device-on-the-local-network)
* [How to Backup SD Cards](#how-to-backup-sd-cards)
* [How to Move Files](#how-to-move-files)
    * Cyberduck
    * sftp
    * scp
* [References](#references)
<!-- testing -->

## How to Locate a Device on the Local Network

Assuming the device has been setup previously to connect to a wireless network (`wlan0`) or is plugged into a wired connection (`eth0`). Open Terminal and type `arp -a` to display a list of connected devices on the local network. If you know the device MAC address you can match up the IP address or if you only see a few available IP addresses, you can try to ssh into any of them to identify which one is the Raspberry Pi.

For example,

On my mac I type `arp -a` and see the following results:

```
~$ arp -a
? (192.168.0.1) at 40:5d:82:37:62:a on en0 ifscope [ethernet]
? (192.168.0.12) at 78:31:c1:ba:fd:1c on en0 ifscope permanent [ethernet]
? (192.168.0.14) at 6c:70:9f:36:a9:d0 on en0 ifscope [ethernet]
? (192.168.0.16) at bc:52:b7:6f:2f:87 on en0 ifscope [ethernet]
? (192.168.0.17) at 98:5a:eb:db:b7:41 on en0 ifscope [ethernet]
? (192.168.0.18) at b8:27:eb:c9:d6:2a on en0 ifscope [ethernet]
? (192.168.0.24) at (incomplete) on en0 ifscope [ethernet]
? (192.168.0.255) at ff:ff:ff:ff:ff:ff on en0 ifscope [ethernet]
all-systems.mcast.net (224.0.0.1) at 1:0:5e:0:0:1 on en0 ifscope permanent [ethernet]
? (224.0.0.251) at 1:0:5e:0:0:fb on en0 ifscope permanent [ethernet]
? (239.255.255.250) at 1:0:5e:7f:ff:fa on en0 ifscope permanent [ethernet]
broadcasthost (255.255.255.255) at ff:ff:ff:ff:ff:ff on en0 ifscope [ethernet]
```
This list includes devices that are likely not available any longer yet they are still kept in the router memory. If I see an IP address that seems new compared to previously used addresses or has a higher end value (ie. .18, .24, etc) then I know that the router's DHCP assigned a new IP address and my device is one of these.

If I make note of the MAC address on the Raspberry PI then I can easily match up the known address with what appears next to the IP address in the list above. For example, typing `ifconfig wlan0` (for wireless connection) or `ifconfig eth0` (for wired connection) on the Raspberry PI (logged into already) will return the following:

```
wlan0: flags=4163<UP,BROADCAST,RUNNING,MULTICAST>  mtu 1500
        inet 192.168.0.18  netmask 255.255.255.0  broadcast 192.168.0.255
        inet6 2601:282:1:a2c0:a7e0:7f71:8fd4:a56b  prefixlen 64  scopeid 0x0<global>
        inet6 fe80::2a55:fda0:de5e:1083  prefixlen 64  scopeid 0x20<link>
        ether b8:27:eb:c9:d6:2a  txqueuelen 1000  (Ethernet)
        RX packets 381  bytes 70019 (68.3 KiB)
        RX errors 0  dropped 0  overruns 0  frame 0
        TX packets 214  bytes 33428 (32.6 KiB)
        TX errors 0  dropped 0 overruns 0  carrier 0  collisions 0
```

I can see my MAC address as `b8:27:eb:c9:d6:2a` next to `ether` in the 5th line down. This matches line 7 from above. In this case I identify the address to be `192.168.0.18`.

Line 5 from `ifconfig wlan0` on Raspberry Pi:
```
ether b8:27:eb:c9:d6:2a  txqueuelen 1000  (Ethernet)
```
Line 7 from `arp -a` on my mac:
```
? (192.168.0.18) at b8:27:eb:c9:d6:2a on en0 ifscope [ethernet]
```

## How to Backup SD Cards

It can be very useful to make backups of SD cards for a number of reasons. The obvious one being that if and when your card fails, you can make a new card that is identical. Another reason is that you may not want to configure a new system from scratch every time you start a project. If you have backups of a basic system setup, you can quickly get to building vs spending time configuring a new system from the ground up.

To do this you can make use of rdisk and Etcher. Why `dd` rdisk# instead of `dd` as suggested by the [Raspberry Pi Documentation](https://www.raspberrypi.org/documentation/linux/filesystem/backup.md)? Well, `dd` is very slow when using the disk# option and rdisk# is much faster. It provides more direct access to the card itself. [This superuser discussion](https://superuser.com/questions/631592/why-is-dev-rdisk-about-20-times-faster-than-dev-disk-in-mac-os-x) provides more information about why this is the case.

To make a backup of an SD card:

1. Insert a SD card into the computer
2. Open Terminal
3. Look at the list of disks using `diskutil list`. Identity the disk that matches your card. You can tell by looking at the size. Make a note of the disk#.
4. Enter the following command to make a backup using `dd` rdisk. Make sure to enter an output file path that has enough storage space to cover the size of the SD card (ie. If its a 16GB card you need at least 16GB of storage space to save an image to).
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

## How to Move Files

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
* [Raspberry Pi Commands](https://github.com/rjduran/cm-code/blob/master/rpi/COMMANDS.md)
