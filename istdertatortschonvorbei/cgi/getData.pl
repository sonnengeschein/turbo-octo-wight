#!/usr/bin/perl
use strict;
use warnings;
use LWP::Simple;
  

$content = get("http://www.fernsehserien.de/tatort/sendetermine/das-erste");
die "Couldn't get it!" unless defined $content;

print($content);
