async function main() {
  const Voting = await ethers.getContractFactory("Voting");

  // Start deployment, returning a promise that resolves to a contract object (1440mins - 1day)
  const Voting_ = await Voting.deploy(["黃占永 WONG JIM WING", "黃卓謙 WONG CHEUK HIM", "鄧肇峰 Tang Siu Fung", "陳壇丹 CHAN Tan-tan"], 1440);
  console.log("Contract address:", Voting_.address);


}

main()
 .then(() => process.exit(0))
 .catch(error => {
   console.error(error);
   process.exit(1);
 });