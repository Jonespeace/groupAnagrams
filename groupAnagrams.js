function groupAnagrams(words) {
    // Create an empty object to store groups of anagrams
    const anagramGroups = {};

    // Helper function to sort the characters in a word
    function sortWord(word) {
        // Convert the word to an array of characters, sort them, and join back to form a string
        return word.split('').sort().join('');
    }

    // Iterate through each word in the input array
    words.forEach(word => {
        // Sort the characters in the current word to create a signature
        const sortedWord = sortWord(word);

        // If the signature is not a key in the anagramGroups object, create a new array for that key
        if (!anagramGroups[sortedWord]) {
            anagramGroups[sortedWord] = [];
        }

        // Add the current word to the array corresponding to its signature
        anagramGroups[sortedWord].push(word);
    });

    // Convert the values (arrays of anagrams) from the anagramGroups object into a final array
    const result = Object.values(anagramGroups);

    return result;
}

// Example usage:
const words = ["eat", "tea", "tan", "ate", "nat", "bat"];
const groupedAnagrams = groupAnagrams(words);
console.log(groupedAnagrams);
