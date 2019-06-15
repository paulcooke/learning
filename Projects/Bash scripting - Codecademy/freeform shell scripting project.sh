#!/bin/bash
echo "Hello Moomon Rider"
firstline=$(head -n 1 source/changelog.md)
read -a splitfirstline <<< $firstline
version=${splitfirstline[1]}
echo "You are building version" $version
echo "Please enter "1" (for yes) to continue and "0" (for no) to exit."
read versioncontinue
if [ $versioncontinue -eq 1 ]
	then
		for filename in source/*
    	do
      if [ "$filename" == "source/secretinfo.md" ]
      then
      	echo "Not copying" $filename
      else
      	echo "Copying" $filename
        cp $filename build/
      fi
      done
  else
  	echo "Please come back when you are ready"
  fi
cd build/
echo "These are the files in build version" $version
ls
cd ..
