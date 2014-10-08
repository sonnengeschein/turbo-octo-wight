!/usr/bin/perl
use strict;
use warnings;
use CGI;
use JSON;
my $q = CGI->new;

print $q->header('application/json');

