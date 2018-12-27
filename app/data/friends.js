var friends = [
// Could not get picture links to display on GUI
    {
        name: "John Mclean",
        photo: "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiXsu7e-L7fAhXLnuAKHYf6CDcQjRx6BAgBEAU&url=%2Furl%3Fsa%3Di%26source%3Dimages%26cd%3D%26cad%3Drja%26uact%3D8%26ved%3D2ahUKEwiXsu7e-L7fAhXLnuAKHYf6CDcQjRx6BAgBEAU%26url%3Dhttp%253A%252F%252Fhero.wikia.com%252Fwiki%252FJohn_McClane%26psig%3DAOvVaw121c5xXQ14XeozxxQw8iN4%26ust%3D1545963363838249&psig=AOvVaw121c5xXQ14XeozxxQw8iN4&ust=1545963363838249",
        scores: [
            "5",
            "1",
            "4",
            "4",
            "5",
            "1",
            "2",
            "5",
            "4",
            "1"
        ]
    },
    {
        name: "John Rambo",
        photo:  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2F5%2F5a%2FJohnRambo1982.jpg%2F250px-JohnRambo1982.jpg&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FJohn_Rambo&docid=L7c3C5XSEpae-M&tbnid=HNycjqQRv1uaGM%3A&vet=10ahUKEwjeqf2ch7_fAhUPZd8KHdPyBvwQMwhRKAUwBQ..i&w=250&h=156&bih=501&biw=1093&q=John%20Rambo%20pictures&ved=0ahUKEwjeqf2ch7_fAhUPZd8KHdPyBvwQMwhRKAUwBQ&iact=mrc&uact=8",
        scores: [
            "5",
            "3",
            "2",
            "3",
            "2",
            "4",
            "3",
            "4",
            "4",
            "3"
        ]
    },
    {
        name: "Alonzo Harris",
        photo:  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fvignette.wikia.nocookie.net%2Fvillains%2Fimages%2Fd%2Fd2%2FAlonzo_Harris.jpg%2Frevision%2Flatest%3Fcb%3D20151211192800&imgrefurl=http%3A%2F%2Fvillains.wikia.com%2Fwiki%2FAlonzo_Harris&docid=LwE69MVWL3f-1M&tbnid=uSybD6vvN_y_MM%3A&vet=10ahUKEwivtv-yh7_fAhXjYN8KHd-zDpoQMwhQKAAwAA..i&w=630&h=850&bih=501&biw=1093&q=alonzo%20harris&ved=0ahUKEwivtv-yh7_fAhXjYN8KHd-zDpoQMwhQKAAwAA&iact=mrc&uact=8",
        scores: [
            "4",
            "3",
            "4",
            "5",
            "2",
            "3",
            "2",
            "3",
            "4",
            "3"
        ]
    },
    {
        name: "John Wick",
        photo:  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fpixel.nymag.com%2Fimgs%2Fdaily%2Fvulture%2F2017%2F02%2F07%2F07-john-wick-2-2.w700.h700.jpg&imgrefurl=https%3A%2F%2Fwww.vulture.com%2F2017%2F02%2Fmovie-review-john-wick-2-is-even-better-than-the-original.html&docid=i00FrX26e-qJsM&tbnid=ONlkF-uYxmNwNM%3A&vet=10ahUKEwjyuqTJh7_fAhVNn-AKHfG0DTEQMwhfKAwwDA..i&w=577&h=577&hl=en&authuser=0&bih=501&biw=1093&q=john%20wick%20pictures&ved=0ahUKEwjyuqTJh7_fAhVNn-AKHfG0DTEQMwhfKAwwDA&iact=mrc&uact=8",
        scores: [
            "1",
            "1",
            "4",
            "4",
            "5",
            "1",
            "2",
            "5",
            "4",
            "1"
        ]
    },
    {
        name: "Peter Parker",
        photo:  "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwjem8bch7_fAhXBdN8KHexFC_4QjRx6BAgBEAU&url=https%3A%2F%2Fmedium.com%2F%40cameroncarpenter_2030%2Fpoor-peter-parker-the-gentrification-of-spider-man-49cbff1d3e7f&psig=AOvVaw2t5E9wHESvwvcs9L7mgke2&ust=1545967459108493",
        scores: [
            "5",
            "1",
            "4",
            "5",
            "5",
            "1",
            "3",
            "5",
            "5",
            "5"
        ]
    },
    {
        name: "Tony Stark",
        photo:  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fi.investopedia.com%2Finv%2Farticles%2Fslideshow%2FIronMan%2FStark.jpg%3Fquality%3D80%26width%3D680%26height%3D680&imgrefurl=https%3A%2F%2Fwww.investopedia.com%2Fslide-show%2Fbillionaires-like-tony-stark%2F&docid=E005bZv6py8X9M&tbnid=3asMh22GFLepHM%3A&vet=10ahUKEwiOv8e5iL_fAhUimeAKHdDHDoMQMwhwKCcwJw..i&w=640&h=334&hl=en&authuser=0&bih=501&biw=1093&q=tony%20stark%20pictures&ved=0ahUKEwiOv8e5iL_fAhUimeAKHdDHDoMQMwhwKCcwJw&iact=mrc&uact=8",
        scores: [
            "5",
            "1",
            "1",
            "5",
            "1",
            "5",
            "5",
            "5",
            "5",
            "5"
        ]
    },
    {
        name: "Elvis",
        photo:  "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwi5w9XUiL_fAhXhguAKHU9JAgMQjRx6BAgBEAU&url=https%3A%2F%2Fwww.pinterest.com%2Fpin%2F256564509991706498%2F&psig=AOvVaw0ZU5QD4MXhLCq9fmvHiNaN&ust=1545967707147143",
        scores: [
            "5",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
        ]
    },
    {
        name: "Clint Eastwood",
        photo:  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fs.hswstatic.com%2Fgif%2Feastwood-rule-1.jpg&imgrefurl=https%3A%2F%2Fentertainment.howstuffworks.com%2Fwhat-is-eastwood-rule.htm&docid=avGFQJgBXokoOM&tbnid=SLKKdqIPPHVdvM%3A&vet=10ahUKEwiYot_iiL_fAhWJm-AKHfdKB0YQMwhcKAUwBQ..i&w=360&h=240&hl=en&authuser=0&bih=501&biw=1093&q=clint%20eastwood%20pictures&ved=0ahUKEwiYot_iiL_fAhWJm-AKHfdKB0YQMwhcKAUwBQ&iact=mrc&uact=8",
        scores: [
            "5",
            "5",
            "4",
            "5",
            "5",
            "1",
            "2",
            "5",
            "4",
            "1"
        ]
    },
    {
        name: "Bruce Lee",
        photo:  "https://www.google.com/imgres?imgurl=https%3A%2F%2Fwww.star2.com%2Fwp-content%2Fuploads%2F2018%2F07%2Fstr2_dabrucelee_MAIN_cn-e1532050151469-1170x480.jpg&imgrefurl=https%3A%2F%2Fwww.star2.com%2Fentertainment%2F2018%2F07%2F20%2Fbruce-lee-legacy-45-years%2F&docid=92l3Bg7JKE2n6M&tbnid=zTcRpnkBm1g_yM%3A&vet=10ahUKEwiE67_1iL_fAhXnTN8KHc3sCqkQMwiRASglMCU..i&w=1170&h=480&hl=en&authuser=0&bih=501&biw=1093&q=bruce%20lee%20pictures&ved=0ahUKEwiE67_1iL_fAhXnTN8KHc3sCqkQMwiRASglMCU&iact=mrc&uact=8",
        scores: [
            "5",
            "3",
            "4",
            "2",
            "2",
            "1",
            "3",
            "2",
            "2",
            "3"
        ]
    },
    {
        name: "Sean Connory",
        photo:  "https://www.google.com/url?sa=i&source=images&cd=&cad=rja&uact=8&ved=2ahUKEwiD0tCKib_fAhWGZd8KHe3MBu8QjRx6BAgBEAU&url=https%3A%2F%2Fprabook.com%2Fweb%2Fsean.connery%2F3736747&psig=AOvVaw3u1wdljOfmPaj5p8FJE_PX&ust=1545967824364068",
        scores: [
            "4",
            "3",
            "4",
            "1",
            "5",
            "2",
            "5",
            "3",
            "1",
            "4"
        ]
    },
    {
        name: "Chuck Norris",
        photo:  "https://www.google.com/imgres?imgurl=http%3A%2F%2Fwww.blastmedia.com%2Fwp-content%2Fuploads%2F2011%2F06%2FChuckNorris.jpg&imgrefurl=https%3A%2F%2Fwww.blastmedia.com%2F2011%2F06%2F27%2Ffive-pr-tips-for-a-successful-launch-courtesy-of-chuck-norris%2F&docid=tQWARAzTd21P_M&tbnid=k82IfzPBSLFhwM%3A&vet=12ahUKEwjlicijib_fAhVNrVkKHaNqBUI4ZBAzKCYwJnoECAEQJw..i&w=340&h=378&itg=1&hl=en&authuser=0&bih=501&biw=1093&q=chuck%20norris%20pictures&ved=2ahUKEwjlicijib_fAhVNrVkKHaNqBUI4ZBAzKCYwJnoECAEQJw&iact=mrc&uact=8",
        scores: [
            "4",
            "4",
            "2",
            "3",
            "2",
            "2",
            "3",
            "2",
            "4",
            "5"
        ]
    },
];

module.exports = friends;