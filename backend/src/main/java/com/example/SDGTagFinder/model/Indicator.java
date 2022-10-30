package com.example.SDGTagFinder.model;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import com.fasterxml.jackson.annotation.JsonIgnore;


@Entity
@Table(name = "Indicator")
public class Indicator {
	  @ManyToOne(fetch = FetchType.LAZY, optional = false)
	  @JoinColumn(name = "target_id", nullable = false)
	  @OnDelete(action = OnDeleteAction.CASCADE)
	  @JsonIgnore
      Target target;
        @Id
        @GeneratedValue(strategy = GenerationType.IDENTITY)
        @Column(name="Indicator_id")
            private Long id;
        
        @Column(name="description")
        private String description;

		public Target getTarget() {
			return target;
		}

		public void setTarget(Target target) {
			this.target = target;
		}

		public Long getId() {
			return id;
		}

		public void setId(Long id) {
			this.id = id;
		}

		public String getDescription() {
			return description;
		}

		public void setDescription(String description) {
			this.description = description;
		}   
        
        
}