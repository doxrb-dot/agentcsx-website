window.AGENTCSX_LOGO = `<svg class="csx-svg" viewBox="222 140 870 870" width="100%" height="100%" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
  <title>Animated chatbot growth icon</title>
  <desc>Vector SVG with blinking eyes and left-right eye movement.</desc>

  <defs>
    <linearGradient id="blueGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#0aa7f5"/>
      <stop offset="0.55" stop-color="#087cf3"/>
      <stop offset="1" stop-color="#123be8"/>
    </linearGradient>

    <linearGradient id="navyGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#102553"/>
      <stop offset="1" stop-color="#071333"/>
    </linearGradient>

    <linearGradient id="tealGrad" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#19ead3"/>
      <stop offset="1" stop-color="#06b9c6"/>
    </linearGradient>

    <filter id="shadow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="5" stdDeviation="6" flood-color="#2754a8" flood-opacity="0.18"/>
    </filter>

    <clipPath id="faceClip">
      <rect x="414" y="481" width="344" height="163" rx="53" ry="53"/>
    </clipPath>
  </defs>

  <!-- Blue outer bubble + lower blue node + arrow -->
  <g filter="url(#shadow)" fill="url(#blueGrad)">
    <path d="M 734 679
             L 715 688 L 701 704 L 695 721 L 696 742 L 706 762
             L 717 772 L 737 780 L 755 780 L 771 774 L 786 761
             L 793 749 L 796 739 L 796 720 L 792 707 L 787 699
             L 772 685 L 757 679 Z"/>
    <path d="M 801 308
             L 753 275 L 723 260 L 681 245 L 646 237 L 615 233
             L 554 234 L 491 247 L 457 259 L 424 275 L 395 293
             L 370 312 L 326 356 L 292 404 L 269 450 L 257 483
             L 249 513 L 242 563 L 242 604 L 245 633 L 253 670
             L 262 698 L 284 746 L 299 770 L 323 800 L 321 812
             L 281 899 L 282 914 L 290 925 L 302 930 L 315 929
             L 380 911 L 448 889 L 456 889 L 490 902 L 517 909
             L 565 916 L 617 916 L 667 908 L 725 889 L 769 866
             L 816 831 L 853 792 L 883 748 L 899 716 L 909 690
             L 924 632 L 928 600 L 929 569 L 913 576 L 901 578
             L 885 577 L 872 573 L 862 597 L 840 639 L 807 686
             L 817 705 L 821 724 L 820 743 L 814 762 L 802 780
             L 779 798 L 757 805 L 735 805 L 722 802 L 705 794
             L 690 806 L 670 818 L 641 826 L 595 832 L 546 830
             L 516 825 L 496 819 L 487 819 L 364 870 L 359 869
             L 360 864 L 406 777 L 406 769 L 376 737 L 354 704
             L 334 657 L 324 610 L 323 563 L 326 539 L 332 513
             L 347 473 L 364 442 L 388 410 L 416 383 L 445 362
             L 477 345 L 529 328 L 568 322 L 609 322 L 638 326
             L 681 338 L 721 357 L 757 382 L 766 386 L 781 388
             L 794 385 L 803 380 L 813 370 L 819 358 L 820 335
             L 818 328 L 811 317 Z"/>
    <path d="M 1072 220
             L 949 297 L 996 319 L 934 432 L 946 439 L 959 454
             L 1027 337 L 1072 363 Z"/>
  </g>

  <!-- Teal upper node -->
  <g filter="url(#shadow)" fill="url(#tealGrad)">
    <path d="M 888 449
             L 874 454 L 865 460 L 858 467 L 848 486 L 847 509
             L 854 527 L 859 534 L 867 541 L 883 549 L 892 551
             L 904 551 L 922 545 L 939 530 L 945 520 L 948 510
             L 948 489 L 942 474 L 929 459 L 917 452 L 906 449 Z"/>
  </g>

  <!-- Robot face -->
  <g filter="url(#shadow)">
    <rect x="414" y="481" width="344" height="163" rx="53" ry="53" fill="url(#navyGrad)"/>
  </g>

  <!-- Animated eyes -->
  <g clip-path="url(#faceClip)">
    <ellipse cx="507" cy="562" rx="31" ry="31" fill="#ffffff">
      <animate attributeName="cx"
               values="507;492;492;507;522;522;507;507"
               keyTimes="0;0.12;0.25;0.37;0.50;0.62;0.74;1"
               dur="6s"
               repeatCount="indefinite"/>
      <animate attributeName="ry"
               values="31;31;31;2;31;31;31;2;31"
               keyTimes="0;0.20;0.34;0.38;0.42;0.70;0.82;0.86;1"
               dur="6s"
               repeatCount="indefinite"/>
    </ellipse>

    <ellipse cx="665" cy="562" rx="31" ry="31" fill="#ffffff">
      <animate attributeName="cx"
               values="665;650;650;665;680;680;665;665"
               keyTimes="0;0.12;0.25;0.37;0.50;0.62;0.74;1"
               dur="6s"
               repeatCount="indefinite"/>
      <animate attributeName="ry"
               values="31;31;31;2;31;31;31;2;31"
               keyTimes="0;0.20;0.34;0.38;0.42;0.70;0.82;0.86;1"
               dur="6s"
               repeatCount="indefinite"/>
    </ellipse>
  </g>
</svg>`;
