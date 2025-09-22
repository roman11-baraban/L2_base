function ipv4Parser(ip, mask) {
  const ipOctets = ip.split('.').map(Number);
  const maskOctets = mask.split('.').map(Number);
  const networkAddress = [];
  const hostIdentifier = [];

  for (let i = 0; i < 4; i++) {
    const net = ipOctets[i] & maskOctets[i];
    const host = ipOctets[i] - net;
    networkAddress.push(net);
    hostIdentifier.push(host);
  }

  const networkString = networkAddress.join('.');
  const hostString = hostIdentifier.join('.');
  return [networkString, hostString];
}

