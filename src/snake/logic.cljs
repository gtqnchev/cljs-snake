(ns snake.logic)

(defn next-head-position [{:keys [dir location]}]
  (mapv + dir (last location)))

(defn add-prize [{:keys [width height prizes location] :as snake}]
  (let [occupied (concat location prizes)
        free-cells (for [i (range) :while (< i width)
                         j (range) :while (< j height)
                         :when (every? (partial not= [i j]) occupied)]
                     [i j])]
    (->> free-cells
         (rand-nth)
         (conj prizes)
         (assoc snake :prizes))))

(defn eat [prize {:keys [prizes location] :as snake}]
  (-> snake
      (assoc :prizes (disj prizes prize)
             :location (conj location prize))
      (add-prize)))

(defn move-on [free-cell-ahead {:keys [location] :as snake}]
  (->> free-cell-ahead
       (conj location)
       (rest)
       (vec)
       (assoc snake :location)))

(defn wall? [[x y] snake]
  (or (< x 0) (>= x (snake :width))
      (< y 0) (>= y (snake :height))))

(defn move [snake]
  (let [ahead (next-head-position snake)
        prize? (snake :prizes)
        body? (set (rest (snake :location)))]
    (cond
     (or (body? ahead)
         (wall? ahead snake)) false
         (prize? ahead) (eat ahead snake)
         :else (move-on ahead snake))))

(defn turn [snake dir]
  (let [directions {:left [-1  0] :right  [1 0]
                    :top  [ 0 -1] :bottom [0 1]}]
    (if (= [0 0] (map + (directions dir) (snake :dir)))
      snake
      (assoc snake :dir (directions dir)))))

(defn danger? [snake]
  (let [next-move (move snake)]
    (or (false? next-move)
        (false? (move next-move)))))