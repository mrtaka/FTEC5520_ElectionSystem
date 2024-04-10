async function main() {
    const Voting = await ethers.getContractFactory("Voting");
  
    // Start deployment, returning a promise that resolves to a contract object (1440mins - 1day)
    // const Voting_ = await Voting.deploy(["黃占永 WONG JIM WING", "黃卓謙 WONG CHEUK HIM", "鄧肇峰 Tang Siu Fung", "陳壇丹 CHAN Tan-tan"], 43200, "沙田西 Sha Tin West");
    const Voting_ = await Voting.deploy(["李家軒 LEE KA HIN", "黎懿霆 LAI YEE TING LULU", "李思敏 LI SZE MAN"], 144000, "油尖旺北 Yau Tsim Mong North");
    console.log("Contract address:", Voting_.address);

  
  }
  
  main()
   .then(() => process.exit(0))
   .catch(error => {
     console.error(error);
     process.exit(1);
   });