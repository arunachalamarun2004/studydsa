// ============================================================
//  DSA Problem Checklist — 400 Problems — app.js
// ============================================================

const DATA = [
{
  name:"Arrays", short:"Arrays",
  patterns:[
    {label:"Traversal & Basic", problems:[
      {n:"Two Sum",lc:1,d:"E",star:true},
      {n:"Best Time to Buy and Sell Stock",lc:121,d:"E",star:true},
      {n:"Maximum Subarray",lc:53,d:"E",star:true},
      {n:"Contains Duplicate",lc:217,d:"E"},
      {n:"Missing Number",lc:268,d:"E"},
      {n:"Single Number",lc:136,d:"E"},
      {n:"Move Zeroes",lc:283,d:"E"},
      {n:"Remove Duplicates from Sorted Array",lc:26,d:"E"},
      {n:"Remove Element",lc:27,d:"E"},
      {n:"Merge Sorted Array",lc:88,d:"E"},
    ]},
    {label:"Prefix Sum", problems:[
      {n:"Running Sum of 1D Array",lc:1480,d:"E"},
      {n:"Range Sum Query - Immutable",lc:303,d:"E"},
      {n:"Subarray Sum Equals K",lc:560,d:"M",star:true},
      {n:"Product of Array Except Self",lc:238,d:"M",star:true},
      {n:"Find Pivot Index",lc:724,d:"E"},
      {n:"Contiguous Array",lc:525,d:"M"},
      {n:"Minimum Value to Get Positive Step Sum",lc:1413,d:"E"},
      {n:"Maximum Subarray Sum After K Operations",lc:2262,d:"M"},
      {n:"Number of Ways to Split Array",lc:2270,d:"M"},
      {n:"Sum of Absolute Differences in Sorted Array",lc:1685,d:"M"},
    ]},
    {label:"Two Pointers on Arrays", problems:[
      {n:"Sort Colors",lc:75,d:"M",star:true},
      {n:"3Sum",lc:15,d:"M",star:true},
      {n:"Container With Most Water",lc:11,d:"M",star:true},
      {n:"Trapping Rain Water",lc:42,d:"M"},
      {n:"4Sum",lc:18,d:"M"},
      {n:"3Sum Closest",lc:16,d:"M"},
      {n:"Two Sum II Input Array is Sorted",lc:167,d:"M"},
      {n:"Squares of a Sorted Array",lc:977,d:"E"},
      {n:"Boats to Save People",lc:881,d:"M"},
      {n:"Minimum Size Subarray Sum",lc:209,d:"M"},
    ]},
    {label:"Matrix & In-place", problems:[
      {n:"Rotate Image",lc:48,d:"M"},
      {n:"Spiral Matrix",lc:54,d:"M"},
      {n:"Set Matrix Zeroes",lc:73,d:"M"},
      {n:"Search a 2D Matrix",lc:74,d:"M"},
      {n:"Diagonal Traverse",lc:498,d:"M"},
      {n:"Pascal's Triangle",lc:118,d:"E"},
      {n:"Find All Numbers Disappeared in Array",lc:448,d:"E"},
      {n:"Find All Duplicates in Array",lc:442,d:"M"},
      {n:"Next Permutation",lc:31,d:"M"},
      {n:"Jump Game",lc:55,d:"M"},
    ]},
    {label:"Interval & Greedy", problems:[
      {n:"Merge Intervals",lc:56,d:"M",star:true},
      {n:"Insert Interval",lc:57,d:"M"},
      {n:"Non-overlapping Intervals",lc:435,d:"M"},
      {n:"Meeting Rooms II",lc:253,d:"M"},
      {n:"Maximum Product Subarray",lc:152,d:"M",star:true},
      {n:"Find Minimum in Rotated Sorted Array",lc:153,d:"M"},
      {n:"Gas Station",lc:134,d:"M"},
      {n:"Candy",lc:135,d:"M"},
      {n:"H-Index",lc:274,d:"M"},
      {n:"Majority Element",lc:169,d:"E"},
    ]},
  ]
},
{
  name:"Strings", short:"Strings",
  patterns:[
    {label:"Basic String Ops", problems:[
      {n:"Reverse String",lc:344,d:"E"},
      {n:"Reverse Vowels of a String",lc:345,d:"E"},
      {n:"Valid Palindrome",lc:125,d:"E",star:true},
      {n:"Longest Common Prefix",lc:14,d:"E"},
      {n:"Add Binary",lc:67,d:"E"},
      {n:"Implement strStr()",lc:28,d:"E"},
      {n:"Count and Say",lc:38,d:"M"},
      {n:"String to Integer (atoi)",lc:8,d:"M"},
      {n:"Roman to Integer",lc:13,d:"E"},
      {n:"Integer to Roman",lc:12,d:"M"},
    ]},
    {label:"Anagram & Frequency", problems:[
      {n:"Valid Anagram",lc:242,d:"E",star:true},
      {n:"Group Anagrams",lc:49,d:"M",star:true},
      {n:"First Unique Character in a String",lc:387,d:"E"},
      {n:"Find All Anagrams in a String",lc:438,d:"M",star:true},
      {n:"Ransom Note",lc:383,d:"E"},
      {n:"Custom Sort String",lc:791,d:"M"},
      {n:"Sort Characters By Frequency",lc:451,d:"M"},
      {n:"Number of Good Pairs",lc:1512,d:"E"},
      {n:"Uncommon Words from Two Sentences",lc:884,d:"E"},
      {n:"Word Pattern",lc:290,d:"E"},
    ]},
    {label:"Palindrome", problems:[
      {n:"Longest Palindromic Substring",lc:5,d:"M",star:true},
      {n:"Palindromic Substrings",lc:647,d:"M",star:true},
      {n:"Valid Palindrome II",lc:680,d:"E"},
      {n:"Longest Palindrome",lc:409,d:"E"},
      {n:"Find the Closest Palindrome",lc:564,d:"M"},
      {n:"Palindrome Partitioning II",lc:132,d:"M"},
      {n:"Check if Word is a Prefix of Any Word",lc:1455,d:"E"},
      {n:"Make String Great",lc:1544,d:"E"},
      {n:"Minimum Insertions to Make String Palindrome",lc:1312,d:"M"},
      {n:"Longest Substring with At Least K Repeating Chars",lc:395,d:"M"},
    ]},
    {label:"Parentheses & Structure", problems:[
      {n:"Valid Parentheses",lc:20,d:"E",star:true},
      {n:"Generate Parentheses",lc:22,d:"M",star:true},
      {n:"Minimum Remove to Make Valid Parentheses",lc:1249,d:"M"},
      {n:"Longest Valid Parentheses",lc:32,d:"M"},
      {n:"Check Valid String",lc:678,d:"M"},
      {n:"Different Ways to Add Parentheses",lc:241,d:"M"},
      {n:"Score of Parentheses",lc:856,d:"M"},
      {n:"Remove Outermost Parentheses",lc:1021,d:"E"},
      {n:"Minimum Add to Make Parentheses Valid",lc:921,d:"M"},
      {n:"Count of Substrings Containing Every Vowel and K Consonants II",lc:3305,d:"M"},
    ]},
    {label:"Advanced String", problems:[
      {n:"Reverse Words in a String",lc:151,d:"M"},
      {n:"Encode and Decode Strings",lc:271,d:"M"},
      {n:"Longest Substring Without Repeating Characters",lc:3,d:"M",star:true},
      {n:"String Compression",lc:443,d:"M"},
      {n:"ZigZag Conversion",lc:6,d:"M"},
      {n:"Multiply Strings",lc:43,d:"M"},
      {n:"Compare Version Numbers",lc:165,d:"M"},
      {n:"Decode String",lc:394,d:"M"},
      {n:"License Key Formatting",lc:482,d:"E"},
      {n:"Reorganize String",lc:767,d:"M"},
    ]}
  ]
},
{
  name:"Sliding Window", short:"Sliding W.",
  patterns:[
    {label:"Fixed Window", problems:[
      {n:"Maximum Average Subarray I",lc:643,d:"E",star:true},
      {n:"Maximum Sum of Almost Unique Subarray",lc:2841,d:"M"},
      {n:"Number of Sub-arrays of Size K and Avg >= Threshold",lc:1343,d:"M"},
      {n:"Grumpy Bookstore Owner",lc:1052,d:"M"},
      {n:"Sliding Window Maximum",lc:239,d:"M",star:true},
      {n:"Contains Duplicate II",lc:219,d:"E"},
      {n:"Maximum Sum of Distinct Subarrays With Length K",lc:2461,d:"M"},
      {n:"Find K-Length Substrings With No Repeated Characters",lc:1100,d:"M"},
      {n:"Maximum Points You Can Obtain from Cards",lc:1423,d:"M"},
      {n:"K Radius Subarray Averages",lc:2090,d:"M"},
    ]},
    {label:"Variable Window — Shrink Left", problems:[
      {n:"Longest Substring Without Repeating Characters",lc:3,d:"M",star:true},
      {n:"Minimum Size Subarray Sum",lc:209,d:"M",star:true},
      {n:"Fruit Into Baskets",lc:904,d:"M",star:true},
      {n:"Max Consecutive Ones III",lc:1004,d:"M",star:true},
      {n:"Longest Repeating Character Replacement",lc:424,d:"M",star:true},
      {n:"Minimum Window Substring",lc:76,d:"M",star:true},
      {n:"Longest Subarray of 1s After Deleting One Element",lc:1493,d:"M"},
      {n:"Get Equal Substrings Within Budget",lc:1208,d:"M"},
      {n:"Maximum Erasure Value",lc:1695,d:"M"},
      {n:"Subarray With Elements Greater Than Varying Threshold",lc:2334,d:"M"},
    ]},
    {label:"Multi-condition Window", problems:[
      {n:"Permutation in String",lc:567,d:"M",star:true},
      {n:"Minimum Window Substring (HashMap)",lc:76,d:"M"},
      {n:"Longest Substring with At Most Two Distinct Chars",lc:159,d:"M"},
      {n:"Longest Substring with At Most K Distinct Chars",lc:340,d:"M"},
      {n:"Count Number of Nice Subarrays",lc:1248,d:"M"},
      {n:"Replace the Substring for Balanced String",lc:1234,d:"M"},
      {n:"Number of Substrings Containing All Three Characters",lc:1358,d:"M"},
      {n:"Binary Subarrays With Sum",lc:930,d:"M"},
      {n:"Subarrays with K Different Integers",lc:992,d:"M"},
      {n:"Maximum Beauty of an Array After Applying Operation",lc:2779,d:"M"},
    ]},
    {label:"Kadane's & Variants", problems:[
      {n:"Maximum Subarray (Kadane's)",lc:53,d:"E"},
      {n:"Maximum Sum Circular Subarray",lc:918,d:"M",star:true},
      {n:"Best Time to Buy and Sell Stock",lc:121,d:"E"},
      {n:"Best Time to Buy and Sell Stock II",lc:122,d:"M"},
      {n:"Maximum Product Subarray",lc:152,d:"M"},
      {n:"Maximum Absolute Sum of Any Subarray",lc:1749,d:"M"},
      {n:"Minimum Subarray Length",lc:209,d:"M"},
      {n:"Degree of an Array",lc:697,d:"E"},
      {n:"Subarray Sum Divisible by K",lc:974,d:"M"},
      {n:"Contiguous Array",lc:525,d:"M"},
    ]},
    {label:"Advanced Sliding Window", problems:[
      {n:"Longest Turbulent Subarray",lc:978,d:"M"},
      {n:"Diet Plan Performance",lc:1176,d:"E"},
      {n:"Find All Anagrams in a String",lc:438,d:"M"},
      {n:"Minimum Difference Between Highest and Lowest of K Scores",lc:1984,d:"E"},
      {n:"Minimum Number of Flips to Make Binary String Alternating",lc:1888,d:"M"},
      {n:"Frequency of the Most Frequent Element",lc:1838,d:"M"},
      {n:"Minimum Operations to Reduce X to Zero",lc:1658,d:"M"},
      {n:"Maximum Number of Vowels in Substring of Given Length",lc:1456,d:"M"},
      {n:"Maximum Length of Repeated Subarray",lc:718,d:"M"},
      {n:"Count Complete Subarrays in an Array",lc:2799,d:"M"},
    ]}
  ]
},
{
  name:"Recursion & Backtracking", short:"Recursion",
  patterns:[
    {label:"Basic Recursion", problems:[
      {n:"Fibonacci Number",lc:509,d:"E"},
      {n:"Power of Two",lc:231,d:"E"},
      {n:"Power of Three",lc:326,d:"E"},
      {n:"Count Good Numbers",lc:1922,d:"M"},
      {n:"Reverse Linked List (recursive)",lc:206,d:"E"},
      {n:"Merge Two Sorted Lists (recursive)",lc:21,d:"E"},
      {n:"Maximum Depth of Binary Tree (recursive)",lc:104,d:"E"},
      {n:"Same Tree",lc:100,d:"E"},
      {n:"Invert Binary Tree",lc:226,d:"E"},
      {n:"Pow(x, n)",lc:50,d:"M",star:true},
    ]},
    {label:"Generate All — Subsets", problems:[
      {n:"Subsets",lc:78,d:"M",star:true},
      {n:"Subsets II",lc:90,d:"M",star:true},
      {n:"Combination Sum",lc:39,d:"M",star:true},
      {n:"Combination Sum II",lc:40,d:"M",star:true},
      {n:"Combination Sum III",lc:216,d:"M"},
      {n:"Letter Combinations of a Phone Number",lc:17,d:"M",star:true},
      {n:"Combinations",lc:77,d:"M"},
      {n:"Beautiful Arrangement",lc:526,d:"M"},
      {n:"Iterator for Combination",lc:1286,d:"M"},
      {n:"Find Unique Binary String",lc:1980,d:"M"},
    ]},
    {label:"Permutations", problems:[
      {n:"Permutations",lc:46,d:"M",star:true},
      {n:"Permutations II",lc:47,d:"M",star:true},
      {n:"Next Permutation",lc:31,d:"M"},
      {n:"Permutation Sequence",lc:60,d:"M"},
      {n:"Find Kth Largest Integer in Array",lc:1985,d:"M"},
      {n:"Count Vowels Permutation",lc:1220,d:"M"},
      {n:"Construct the Lexicographically Largest Valid Sequence",lc:1718,d:"M"},
      {n:"Special Permutations",lc:2741,d:"M"},
      {n:"Count Number of Texts",lc:2266,d:"M"},
      {n:"Zuma Game",lc:488,d:"M"},
    ]},
    {label:"Grid Backtracking", problems:[
      {n:"Word Search",lc:79,d:"M",star:true},
      {n:"Word Search II",lc:212,d:"M"},
      {n:"Sudoku Solver",lc:37,d:"M",star:true},
      {n:"N-Queens",lc:51,d:"M",star:true},
      {n:"N-Queens II",lc:52,d:"M"},
      {n:"Rat in a Maze (Number of Paths)",lc:62,d:"M"},
      {n:"Flood Fill",lc:733,d:"E"},
      {n:"Path with Maximum Gold",lc:1219,d:"M"},
      {n:"Number of Closed Islands",lc:1254,d:"M"},
      {n:"Robot Room Cleaner",lc:489,d:"M"},
    ]},
    {label:"Advanced Backtracking", problems:[
      {n:"Palindrome Partitioning",lc:131,d:"M",star:true},
      {n:"Restore IP Addresses",lc:93,d:"M"},
      {n:"Expression Add Operators",lc:282,d:"M"},
      {n:"Remove Invalid Parentheses",lc:301,d:"M"},
      {n:"Word Break II",lc:140,d:"M"},
      {n:"Generalized Abbreviation",lc:320,d:"M"},
      {n:"Binary Watch",lc:401,d:"E"},
      {n:"Target Sum",lc:494,d:"M"},
      {n:"Maximum Length of a Concatenated String with Unique Characters",lc:1239,d:"M"},
      {n:"Letter Tile Possibilities",lc:1079,d:"M"},
    ]}
  ]
},
{
  name:"Sorting & Searching", short:"Sort/Search",
  patterns:[
    {label:"Binary Search Core", problems:[
      {n:"Binary Search",lc:704,d:"E",star:true},
      {n:"Search Insert Position",lc:35,d:"E"},
      {n:"Guess Number Higher or Lower",lc:374,d:"E"},
      {n:"First Bad Version",lc:278,d:"E"},
      {n:"Search a 2D Matrix",lc:74,d:"M",star:true},
      {n:"Search a 2D Matrix II",lc:240,d:"M"},
      {n:"Find Smallest Letter Greater Than Target",lc:744,d:"E"},
      {n:"Count of Range Sum",lc:327,d:"M"},
      {n:"Valid Perfect Square",lc:367,d:"E"},
      {n:"Sqrt(x)",lc:69,d:"E"},
    ]},
    {label:"Binary Search on Rotated / Variants", problems:[
      {n:"Search in Rotated Sorted Array",lc:33,d:"M",star:true},
      {n:"Search in Rotated Sorted Array II",lc:81,d:"M"},
      {n:"Find Minimum in Rotated Sorted Array",lc:153,d:"M",star:true},
      {n:"Find Peak Element",lc:162,d:"M",star:true},
      {n:"Find First and Last Position of Element in Sorted Array",lc:34,d:"M",star:true},
      {n:"Single Element in a Sorted Array",lc:540,d:"M"},
      {n:"Time Based Key-Value Store",lc:981,d:"M"},
      {n:"Find Right Interval",lc:436,d:"M"},
      {n:"Russian Doll Envelopes",lc:354,d:"M"},
      {n:"Missing Element in Sorted Array",lc:1060,d:"M"},
    ]},
    {label:"Binary Search on Answer", problems:[
      {n:"Koko Eating Bananas",lc:875,d:"M",star:true},
      {n:"Capacity to Ship Packages Within D Days",lc:1011,d:"M",star:true},
      {n:"Split Array Largest Sum",lc:410,d:"M"},
      {n:"Minimum Number of Days to Make m Bouquets",lc:1482,d:"M"},
      {n:"Minimize Maximum of Array",lc:2439,d:"M"},
      {n:"Maximum Number of Removable Characters",lc:1898,d:"M"},
      {n:"Minimum Speed to Arrive on Time",lc:1870,d:"M"},
      {n:"Magnetic Force Between Two Balls",lc:1552,d:"M"},
      {n:"Find the Smallest Divisor Given a Threshold",lc:1283,d:"M"},
      {n:"Median of Two Sorted Arrays",lc:4,d:"M"},
    ]},
    {label:"Sorting Algorithms & Applications", problems:[
      {n:"Sort Colors (Dutch Flag)",lc:75,d:"M",star:true},
      {n:"Merge Intervals",lc:56,d:"M"},
      {n:"Largest Number",lc:179,d:"M"},
      {n:"Maximum Gap",lc:164,d:"M"},
      {n:"Wiggle Sort II",lc:324,d:"M"},
      {n:"Sort List",lc:148,d:"M"},
      {n:"Insertion Sort List",lc:147,d:"M"},
      {n:"Pancake Sorting",lc:969,d:"M"},
      {n:"Count Inversions (Merge Sort based)",lc:315,d:"M"},
      {n:"Find Kth Largest Element in Array",lc:215,d:"M"},
    ]},
    {label:"Order Statistics & Quickselect", problems:[
      {n:"Kth Largest Element in an Array",lc:215,d:"M",star:true},
      {n:"Top K Frequent Elements",lc:347,d:"M",star:true},
      {n:"K Closest Points to Origin",lc:973,d:"M",star:true},
      {n:"Kth Smallest Element in a Sorted Matrix",lc:378,d:"M"},
      {n:"Find Median from Data Stream",lc:295,d:"M"},
      {n:"Reorganize String",lc:767,d:"M"},
      {n:"Task Scheduler",lc:621,d:"M"},
      {n:"Furthest Building You Can Reach",lc:1642,d:"M"},
      {n:"Ugly Number II",lc:264,d:"M"},
      {n:"IPO",lc:502,d:"M"},
    ]}
  ]
},
{
  name:"Linked List", short:"Linked List",
  patterns:[
    {label:"Basic Operations", problems:[
      {n:"Reverse Linked List",lc:206,d:"E",star:true},
      {n:"Merge Two Sorted Lists",lc:21,d:"E",star:true},
      {n:"Linked List Cycle",lc:141,d:"E",star:true},
      {n:"Middle of the Linked List",lc:876,d:"E"},
      {n:"Remove Duplicates from Sorted List",lc:83,d:"E"},
      {n:"Remove Linked List Elements",lc:203,d:"E"},
      {n:"Palindrome Linked List",lc:234,d:"E"},
      {n:"Intersection of Two Linked Lists",lc:160,d:"E"},
      {n:"Delete Node in a Linked List",lc:237,d:"M"},
      {n:"Convert Binary Number in Linked List to Integer",lc:1290,d:"E"},
    ]},
    {label:"Two Pointers on List", problems:[
      {n:"Linked List Cycle II (find start)",lc:142,d:"M",star:true},
      {n:"Remove Nth Node From End of List",lc:19,d:"M",star:true},
      {n:"Reorder List",lc:143,d:"M",star:true},
      {n:"Partition List",lc:86,d:"M"},
      {n:"Sort List",lc:148,d:"M"},
      {n:"Odd Even Linked List",lc:328,d:"M"},
      {n:"Rotate List",lc:61,d:"M"},
      {n:"Swap Nodes in Pairs",lc:24,d:"M"},
      {n:"Split Linked List in Parts",lc:725,d:"M"},
      {n:"Insert into a Sorted Circular Linked List",lc:708,d:"M"},
    ]},
    {label:"Reversal Patterns", problems:[
      {n:"Reverse Linked List II",lc:92,d:"M",star:true},
      {n:"Reverse Nodes in k-Group",lc:25,d:"M"},
      {n:"Swap Nodes in Pairs",lc:24,d:"M"},
      {n:"Reverse Nodes in Even Length Groups",lc:2074,d:"M"},
      {n:"Reverse Sublist Between Two Nodes",lc:92,d:"M"},
      {n:"Next Greater Node In Linked List",lc:1019,d:"M"},
      {n:"Remove Zero Sum Consecutive Nodes",lc:1171,d:"M"},
      {n:"Maximum Twin Sum of a Linked List",lc:2130,d:"M"},
      {n:"Delete the Middle Node of a Linked List",lc:2095,d:"M"},
      {n:"Node With Highest Edge Score",lc:2374,d:"M"},
    ]},
    {label:"Deep Copy & Special", problems:[
      {n:"Copy List with Random Pointer",lc:138,d:"M",star:true},
      {n:"Flatten a Multilevel Doubly Linked List",lc:430,d:"M"},
      {n:"LRU Cache",lc:146,d:"M",star:true},
      {n:"LFU Cache",lc:460,d:"M"},
      {n:"Design Linked List",lc:707,d:"M"},
      {n:"Design Browser History",lc:1472,d:"M"},
      {n:"Merge k Sorted Lists",lc:23,d:"M"},
      {n:"Flatten Binary Tree to Linked List",lc:114,d:"M"},
      {n:"Convert Sorted List to Binary Search Tree",lc:109,d:"M"},
      {n:"Add Two Numbers",lc:2,d:"M",star:true},
    ]},
    {label:"Advanced Linked List", problems:[
      {n:"Add Two Numbers II",lc:445,d:"M"},
      {n:"Remove Duplicates from Sorted List II",lc:82,d:"M"},
      {n:"Reverse Linked List (iterative + recursive)",lc:206,d:"E"},
      {n:"Josephus Problem (Circular List)",lc:1823,d:"E"},
      {n:"Design Twitter",lc:355,d:"M"},
      {n:"My Calendar I",lc:729,d:"M"},
      {n:"All O`one Data Structure",lc:432,d:"M"},
      {n:"Design Phone Directory",lc:379,d:"M"},
      {n:"Find the Duplicate Number (Floyd's)",lc:287,d:"M"},
      {n:"Linked List Random Node",lc:382,d:"M"},
    ]}
  ]
},
{
  name:"Stack & Queue", short:"Stack/Queue",
  patterns:[
    {label:"Stack Basics", problems:[
      {n:"Valid Parentheses",lc:20,d:"E",star:true},
      {n:"Min Stack",lc:155,d:"M",star:true},
      {n:"Implement Queue using Stacks",lc:232,d:"E"},
      {n:"Implement Stack using Queues",lc:225,d:"E"},
      {n:"Baseball Game",lc:682,d:"E"},
      {n:"Remove All Adjacent Duplicates in String",lc:1047,d:"E"},
      {n:"Make The String Great",lc:1544,d:"E"},
      {n:"Check if Word is Valid After Substitutions",lc:1003,d:"M"},
      {n:"Maximum Nesting Depth of Parentheses",lc:1614,d:"E"},
      {n:"Removing Stars From a String",lc:2390,d:"M"},
    ]},
    {label:"Monotonic Stack", problems:[
      {n:"Daily Temperatures",lc:739,d:"M",star:true},
      {n:"Next Greater Element I",lc:496,d:"E",star:true},
      {n:"Next Greater Element II",lc:503,d:"M",star:true},
      {n:"Largest Rectangle in Histogram",lc:84,d:"M",star:true},
      {n:"Maximal Rectangle",lc:85,d:"M"},
      {n:"Trapping Rain Water (stack)",lc:42,d:"M"},
      {n:"Sum of Subarray Minimums",lc:907,d:"M",star:true},
      {n:"Remove K Digits",lc:402,d:"M"},
      {n:"132 Pattern",lc:456,d:"M"},
      {n:"Asteroid Collision",lc:735,d:"M"},
    ]},
    {label:"Calculator & Expression", problems:[
      {n:"Basic Calculator II",lc:227,d:"M",star:true},
      {n:"Basic Calculator",lc:224,d:"M"},
      {n:"Evaluate Reverse Polish Notation",lc:150,d:"M"},
      {n:"Decode String",lc:394,d:"M"},
      {n:"Exclusive Time of Functions",lc:636,d:"M"},
      {n:"Mini Parser",lc:385,d:"M"},
      {n:"Ternary Expression Parser",lc:439,d:"M"},
      {n:"Number of Atoms",lc:726,d:"M"},
      {n:"Remove Duplicate Letters",lc:316,d:"M"},
      {n:"Robot Collisions",lc:2751,d:"M"},
    ]},
    {label:"Queue & Deque", problems:[
      {n:"Sliding Window Maximum",lc:239,d:"M",star:true},
      {n:"Design Circular Queue",lc:622,d:"M"},
      {n:"Design Circular Deque",lc:641,d:"M"},
      {n:"Number of Recent Calls",lc:933,d:"E"},
      {n:"Task Scheduler",lc:621,d:"M"},
      {n:"Shortest Subarray with Sum at Least K",lc:862,d:"M"},
      {n:"Jump Game VI",lc:1696,d:"M"},
      {n:"Maximum Performance of a Team",lc:1383,d:"M"},
      {n:"Find the Most Competitive Subsequence",lc:1673,d:"M"},
      {n:"Constrained Subsequence Sum",lc:1425,d:"M"},
    ]},
    {label:"BFS with Queue", problems:[
      {n:"Number of Islands",lc:200,d:"M",star:true},
      {n:"Rotting Oranges",lc:994,d:"M",star:true},
      {n:"01 Matrix",lc:542,d:"M"},
      {n:"Walls and Gates",lc:286,d:"M"},
      {n:"Pacific Atlantic Water Flow",lc:417,d:"M"},
      {n:"Snakes and Ladders",lc:909,d:"M"},
      {n:"Open the Lock",lc:752,d:"M"},
      {n:"Minimum Knight Moves",lc:1197,d:"M"},
      {n:"Jump Game III",lc:1306,d:"M"},
      {n:"Shortest Path in Binary Matrix",lc:1091,d:"M"},
    ]}
  ]
},
{
  name:"Basic DP", short:"Basic DP",
  patterns:[
    {label:"1D DP — Classic", problems:[
      {n:"Climbing Stairs",lc:70,d:"E",star:true},
      {n:"House Robber",lc:198,d:"M",star:true},
      {n:"House Robber II",lc:213,d:"M",star:true},
      {n:"Min Cost Climbing Stairs",lc:746,d:"E"},
      {n:"Jump Game",lc:55,d:"M"},
      {n:"Jump Game II",lc:45,d:"M",star:true},
      {n:"Counting Bits",lc:338,d:"E"},
      {n:"Fibonacci Number",lc:509,d:"E"},
      {n:"Tribonacci Number",lc:1137,d:"E"},
      {n:"Delete and Earn",lc:740,d:"M"},
    ]},
    {label:"Coin & Knapsack", problems:[
      {n:"Coin Change",lc:322,d:"M",star:true},
      {n:"Coin Change II",lc:518,d:"M",star:true},
      {n:"Partition Equal Subset Sum",lc:416,d:"M",star:true},
      {n:"Target Sum",lc:494,d:"M"},
      {n:"Last Stone Weight II",lc:1049,d:"M"},
      {n:"Ones and Zeroes",lc:474,d:"M"},
      {n:"Combination Sum IV",lc:377,d:"M"},
      {n:"Perfect Squares",lc:279,d:"M"},
      {n:"Minimum Cost For Tickets",lc:983,d:"M"},
      {n:"Minimum Falling Path Sum",lc:931,d:"M"},
    ]},
    {label:"Subsequence DP", problems:[
      {n:"Longest Increasing Subsequence",lc:300,d:"M",star:true},
      {n:"Longest Common Subsequence",lc:1143,d:"M",star:true},
      {n:"Longest Palindromic Subsequence",lc:516,d:"M"},
      {n:"Edit Distance",lc:72,d:"M",star:true},
      {n:"Distinct Subsequences",lc:115,d:"M"},
      {n:"Is Subsequence",lc:392,d:"E"},
      {n:"Uncrossed Lines",lc:1035,d:"M"},
      {n:"Maximum Length of Pair Chain",lc:646,d:"M"},
      {n:"Number of Longest Increasing Subsequence",lc:673,d:"M"},
      {n:"Russian Doll Envelopes",lc:354,d:"M"},
    ]},
    {label:"Grid DP", problems:[
      {n:"Unique Paths",lc:62,d:"M",star:true},
      {n:"Unique Paths II",lc:63,d:"M"},
      {n:"Minimum Path Sum",lc:64,d:"M",star:true},
      {n:"Triangle",lc:120,d:"M"},
      {n:"Maximal Square",lc:221,d:"M",star:true},
      {n:"Dungeon Game",lc:174,d:"M"},
      {n:"Cherry Pickup",lc:741,d:"M"},
      {n:"Out of Boundary Paths",lc:576,d:"M"},
      {n:"Number of Paths with Max Score",lc:1301,d:"M"},
      {n:"Minimum Cost to Make Array Equal",lc:2448,d:"M"},
    ]},
    {label:"String DP", problems:[
      {n:"Word Break",lc:139,d:"M",star:true},
      {n:"Decode Ways",lc:91,d:"M",star:true},
      {n:"Palindromic Substrings",lc:647,d:"M"},
      {n:"Longest Palindromic Substring (DP)",lc:5,d:"M"},
      {n:"Interleaving String",lc:97,d:"M"},
      {n:"Regular Expression Matching",lc:10,d:"M"},
      {n:"Wildcard Matching",lc:44,d:"M"},
      {n:"Scramble String",lc:87,d:"M"},
      {n:"Maximum Product of the Length of Two Palindromic Substrings",lc:1960,d:"M"},
      {n:"Minimum ASCII Delete Sum for Two Strings",lc:712,d:"M"},
    ]}
  ]
}
];

// ---- State ----
let ck = {};
let curTopic = 0;
let currentUser = '';

const BUCKET_ID = '6kNZDaHFZF6UGqBLuepyAh'; 
const LB_API = `https://kvdb.io/${BUCKET_ID}/lb_v1_400`;

// ---- Init ----
async function init() {
  try { ck = JSON.parse(localStorage.getItem('dsa400_ck') || '{}'); } catch(e) { ck = {}; }
  currentUser = localStorage.getItem('dsa400_user') || '';

  if (!currentUser) {
    showNameModal();
  } else {
    setUserChip(currentUser);
  }

  buildNav();
  renderTopic();
  updateStats();
}

// ---- Persist ----
function save() {
  try { localStorage.setItem('dsa400_ck', JSON.stringify(ck)); } catch(e) {}
  saveToLeaderboard();
}

// ---- Progress calculation ----
function calcOverallPct() {
  let total = 400; // Fixed total
  let done = 0;
  DATA.forEach((t, ti) => {
    t.patterns.forEach((p, pi) => {
      p.problems.forEach((prob, i) => {
        if (ck[ti + '-' + pi + '-' + i]) done++;
      });
    });
  });
  return Math.round(done / total * 100);
}

function getTopicProgress(ti) {
  let total = 50; // Each topic has 50 problems in this dataset
  let done = 0;
  DATA[ti].patterns.forEach((p, pi) => {
    p.problems.forEach((prob, i) => {
      if (ck[ti + '-' + pi + '-' + i]) done++;
    });
  });
  return { done, total, pct: Math.round(done / total * 100) };
}

// ---- Stats bar ----
function updateStats() {
  let total = 400, solved = 0, mustDone = 0, totalMust = 0;
  DATA.forEach((t, ti) => {
    t.patterns.forEach((p, pi) => {
      p.problems.forEach((prob, i) => {
        if (prob.star) totalMust++;
        if (ck[ti + '-' + pi + '-' + i]) {
          solved++;
          if (prob.star) mustDone++;
        }
      });
    });
  });
  
  document.getElementById('tasks-done').textContent = solved;
  document.getElementById('probs-done').textContent = mustDone; // Using "problems solved" slot for "must-do"
  document.querySelector('#stat-day .stat-label').textContent = "Must-Do Done";
  document.getElementById('cur-day').textContent = mustDone + '/' + totalMust;
  
  const pct = calcOverallPct();
  document.getElementById('ovr-pct').textContent = pct + '%';
  document.getElementById('global-bar').style.width = pct + '%';
}

// ---- Navigation ----
function buildNav() {
  const c = document.getElementById('day-nav');
  c.innerHTML = '';
  DATA.forEach((t, i) => {
    const btn = document.createElement('button');
    let cls = 'dn';
    if (i === curTopic) cls += ' on';
    const prog = getTopicProgress(i);
    if (prog.done === prog.total) cls += ' comp';
    
    btn.className = cls;
    btn.innerHTML = `${t.short}<br><small style="font-size:9px;opacity:0.8">${prog.done}/${prog.total}</small>`;
    btn.onclick = () => { curTopic = i; buildNav(); renderTopic(); };
    c.appendChild(btn);
  });
}

// ---- Render Topic ----
function renderTopic() {
  const t = DATA[curTopic];
  const prog = getTopicProgress(curTopic);
  
  let html = `
    <div class="day-card">
      <div class="day-header">
        <div>
          <div class="day-title">${t.name}</div>
          <div class="day-topic"><span class="badge b-purple">${prog.done}/${prog.total} Problems Solved</span></div>
        </div>
      </div>
      
      <div class="pbar-wrap" style="margin-bottom:24px">
        <div class="pbar" style="width:${prog.pct}%"></div>
      </div>`;

  t.patterns.forEach((p, pi) => {
    html += `
      <div class="section-block">
        <div class="sec-title">${p.label}</div>
        <div class="task-list">`;
    
    p.problems.forEach((prob, i) => {
      const isDone = !!ck[curTopic + '-' + pi + '-' + i];
      html += `
        <label class="task${isDone ? ' done' : ''}">
          <input type="checkbox" ${isDone ? 'checked' : ''} onchange="tog(${pi},${i},this)">
          <span style="font-family:monospace; font-size:11px; color:#888; min-width:35px">#${prob.lc}</span>
          <span style="flex:1">${prob.star ? '<span style="color:#f59e0b; margin-right:4px">⭐</span>' : ''}${prob.n}</span>
          <span class="prob-diff ${prob.d}">${prob.d === 'E' ? 'Easy' : prob.d === 'M' ? 'Med' : 'Hard'}</span>
        </label>`;
    });
    
    html += `</div></div>`;
  });

  html += `</div>`;
  
  // Topic navigation
  const prev = curTopic > 0
    ? `<button class="nav-btn" onclick="goTopic(${curTopic-1})">← ${DATA[curTopic-1].short}</button>` : '';
  const next = curTopic < DATA.length - 1
    ? `<button class="nav-btn" onclick="goTopic(${curTopic+1})">${DATA[curTopic+1].short} →</button>` : '';
  
  html += `<div class="nav-btns">${prev}${next}</div>`;
  
  document.getElementById('day-content').innerHTML = html;
}

// ---- Toggle checkbox ----
function tog(pi, i, el) {
  const key = curTopic + '-' + pi + '-' + i;
  ck[key] = el.checked;
  save();
  
  const lbl = el.closest('.task');
  lbl.classList.toggle('done', el.checked);

  // Update progress bar inline
  const prog = getTopicProgress(curTopic);
  const bar = document.querySelector('.day-card .pbar');
  if (bar) bar.style.width = prog.pct + '%';
  
  updateStats();
  buildNav();
}

function goTopic(i) { curTopic = i; buildNav(); renderTopic(); }

// ---- Leaderboard (Global via KVDB.io) ----
async function getLeaderboard() {
  try {
    const res = await fetch(LB_API);
    if (!res.ok) return [];
    const data = await res.json();
    return Array.isArray(data) ? data : [];
  } catch(e) {
    return JSON.parse(localStorage.getItem('dsa400_lb_fallback') || '[]');
  }
}

async function saveToLeaderboard() {
  if (!currentUser) return;
  const pct = calcOverallPct();
  let lb = await getLeaderboard();
  const idx = lb.findIndex(u => u.name.toLowerCase() === currentUser.toLowerCase());
  if (idx >= 0) {
    if (lb[idx].pct >= pct) return;
    lb[idx].pct = pct;
    lb[idx].updated = Date.now();
  } else {
    lb.push({ name: currentUser, pct, updated: Date.now() });
  }
  lb.sort((a,b) => b.pct - a.pct);
  lb = lb.slice(0, 50); 
  try {
    await fetch(LB_API, { method: 'POST', body: JSON.stringify(lb) });
    localStorage.setItem('dsa400_lb_fallback', JSON.stringify(lb));
  } catch(e) {}
}

async function openLeaderboard() {
  renderLeaderboardSkeleton();
  document.getElementById('lb-backdrop').classList.add('show');
  const modal = document.getElementById('lb-modal');
  modal.style.display = 'block';
  requestAnimationFrame(() => modal.classList.add('show'));
  await saveToLeaderboard();
  await renderLeaderboard();
}

function renderLeaderboardSkeleton() {
  document.getElementById('lb-list').innerHTML = '<div class="lb-empty">Loading rankings... ⏳</div>';
}

async function renderLeaderboard() {
  const lb = await getLeaderboard();
  const list = document.getElementById('lb-list');
  if (!lb.length) {
    list.innerHTML = '<div class="lb-empty">No entries yet. Be the first! 🚀</div>';
    return;
  }
  const medals = ['🥇','🥈','🥉'];
  list.innerHTML = lb.slice(0, 10).map((u, i) => {
    const isMe = currentUser && u.name.toLowerCase() === currentUser.toLowerCase();
    const initial = u.name.charAt(0).toUpperCase();
    return `
      <div class="lb-row${isMe ? ' me' : ''}">
        <div class="lb-rank">${medals[i] || (i+1)}</div>
        <div class="lb-avatar">${initial}</div>
        <div class="lb-name${isMe ? ' me-label' : ''}">${escHtml(u.name)}</div>
        <div class="lb-bar-wrap"><div class="lb-bar" style="width:${u.pct}%"></div></div>
        <div class="lb-pct">${u.pct}%</div>
      </div>`;
  }).join('');
}

// ---- Name modal ----
function showNameModal() {
  document.getElementById('name-backdrop').classList.add('show');
  const modal = document.getElementById('name-modal');
  modal.style.display = 'block';
  requestAnimationFrame(() => modal.classList.add('show'));
  setTimeout(() => document.getElementById('name-input').focus(), 250);
}

function submitName() {
  const val = document.getElementById('name-input').value.trim();
  if (!val) return;
  currentUser = val;
  localStorage.setItem('dsa400_user', val);
  setUserChip(val);
  saveToLeaderboard();
  document.getElementById('name-backdrop').classList.remove('show');
  document.getElementById('name-modal').classList.remove('show');
  setTimeout(() => document.getElementById('name-modal').style.display = '', 200);
}

function closeLeaderboard() {
  document.getElementById('lb-backdrop').classList.remove('show');
  document.getElementById('lb-modal').classList.remove('show');
  setTimeout(() => document.getElementById('lb-modal').style.display = '', 200);
}

function changeUser() {
  document.getElementById('name-input').value = currentUser;
  showNameModal();
}

function setUserChip(name) {
  document.getElementById('user-display').textContent = name;
  document.getElementById('user-avatar').textContent  = name.charAt(0).toUpperCase();
}

function escHtml(str) {
  return str.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}

init();
