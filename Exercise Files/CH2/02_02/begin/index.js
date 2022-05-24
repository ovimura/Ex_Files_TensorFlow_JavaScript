// shape our tenser with 4 rows of 2 columns
const shape = [4,2];
// feed data into the tensor
const data = tf.tensor([4,6,5,9,13,25,1, 57], shape);

// set variables with zeros method
const data2 = tf.variable(tf.zeros([8]));


// print the data
data2.print();

data2.assign(tf.tensor1d([4,12,5,6,56,3,45,3]));

data2.print();