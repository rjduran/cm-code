# Raspberry Pi How Tos

This guide provides various tips and tricks.

_Note: this is a living document and will be updated often.._

## Table of Contents

* [How to Backup SD Cards](#how-to-backup-sd-cards)
* [How to Email Device IP Address](#how-to-email-device-ip-address)
* [References](#references)


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

## How to Email Device IP Address

Coming Soon


## References

* TBD
